couch-diff
==========

take the set difference of two databases. Basically get `_all_docs` of both databases and take the difference (a - b)

install
-------

    $ git clone https://github.com/snbartell/couch-diff.git
    $ cd couch-diff
    $ npm i

usage
-----
given database a and database b

    $ node index.js http://localhost:5984/a http://localhost:5984/b
