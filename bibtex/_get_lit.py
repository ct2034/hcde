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

if __name__ == "__main__":
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

    dir_blog_posts = os.path.join(current_pwd, '..', 'docs/posts/ton')
    assert os.path.exists(dir_blog_posts), f"Blog posts directory must exist. {dir_blog_posts}"

    for filename in os.listdir(dir_blog_posts):
        if filename.endswith(".md"):
            filepath = os.path.join(dir_blog_posts, filename)
            with open(filepath, "r", encoding="utf-8") as file:
                content = file.read()
                # find cited keys in the form of
                # [@key1] or [@key2,@key3]
                matches = re.findall(r'\[@(.*?)\]', content)
                for match in matches:
                    keys = match.split(',')
                    for key in keys:
                        cited_keys.add(key.replace('@', '').strip())

    print(f"{len(cited_keys)} unique keys found.")
    print("e.g:", ', '.join(list(cited_keys)[:3]))

