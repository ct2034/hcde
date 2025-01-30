#!/usr/bin/env python3
# Copyright (C) 2025 Christian Henkel
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import os
from typing import List, Set
import bibtexparser
import re
import argparse
import sys
import difflib

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    do_check = args.check
    print(f"{do_check=}")

    expected_pwd: str = "hcde/bibtex"
    current_pwd = os.getcwd()
    assert (
        expected_pwd in current_pwd
    ), f"Script must be run from {expected_pwd}. Current directory: {current_pwd}"

    source_bibtex: str = "../../bibtex/z-Blog.bib"
    target_bibtex: str = "lit.bib"
    assert os.path.exists(source_bibtex), f"Source bibtex must exist. {source_bibtex}"
    new_content: List[str] = []

    with open(source_bibtex, "r", encoding="utf-8") as f:
        library = bibtexparser.load(f)
    print(f"{len(library.entries)} entries read.")

    cited_keys: Set[str] = set()

    dir_blog_posts = os.path.join(current_pwd, "..", "docs/posts/ton")
    assert os.path.exists(
        dir_blog_posts
    ), f"Blog posts directory must exist. {dir_blog_posts}"

    for filename in os.listdir(dir_blog_posts):
        if filename.endswith(".md"):
            filepath = os.path.join(dir_blog_posts, filename)
            with open(filepath, "r", encoding="utf-8") as file:
                content = file.read()
                # find cited keys in the form of
                # [@key1] or [@key2,@key3]
                matches = re.findall(r"\[@(.*?)\]", content)
                for match in matches:
                    keys = match.split(",")
                    for key in keys:
                        cited_keys.add(key.replace("@", "").strip())

    sorted_cited_keys = sorted(cited_keys)
    print(f"{len(sorted_cited_keys)} unique keys found.")
    print("e.g:", ", ".join(list(sorted_cited_keys)[:3]))

    target_lib = bibtexparser.bibdatabase.BibDatabase()
    for key in sorted_cited_keys:
        try:
            entry = library.entries_dict[key]
            if "howpublished" in entry:
                entry["url"] = entry["howpublished"]
                entry.pop("howpublished", None)
        except KeyError as e:
            print(f"KeyError: {e}")
            sys.exit(os.EX_DATAERR)
        target_lib.entries.append(entry)

    if do_check:
        if not os.path.exists(target_bibtex):
            print(f"{target_bibtex} does not exist.")
            exit(1)

        with open(target_bibtex, "r", encoding="utf-8") as f:
            existing_lib = bibtexparser.load(f)

        existing_entries_str = bibtexparser.dumps(existing_lib)
        target_entries_str = bibtexparser.dumps(target_lib)
        diff = difflib.unified_diff(
            existing_entries_str.splitlines(),
            target_entries_str.splitlines(),
            fromfile="existing",
            tofile="target",
            lineterm="",
        )
        diff_list = list(diff)
        if not diff_list:
            print("The files match.")
            sys.exit(os.EX_OK)
        for line in diff_list:
            print(line)
        print("The files do not match.")
        sys.exit(os.EX_DATAERR)
    else:
        with open(target_bibtex, "w", encoding="utf-8") as f:
            bibtexparser.dump(target_lib, f)
        print(f"Written {len(target_lib.entries)} entries to {target_bibtex}.")
