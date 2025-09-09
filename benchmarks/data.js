window.BENCHMARK_DATA = {
  "lastUpdate": 1757424110951,
  "repoUrl": "https://github.com/MozirDmitriy/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "estefano.bargas@fing.edu.uy",
            "name": "Estéfano Bargas",
            "username": "xqft"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "196a17b1e734d7510cb48192b944361641ea29c3",
          "message": "chore(l2): remove execution cache (#3091)\n\n**Motivation**\n\nWe can use the rollup store for this purpose (by adding a table to store\naccount updates)\n\n**Description**\n\n- deletes `ExecutionCache`, replaces it with the `StoreRollup`\n- adds new tables in all store backends for storing account updates\n- now the block producer has a reference to the rollup store, to push\naccount updates\n\n---------\n\nCo-authored-by: Tomás Paradelo <112426153+tomip01@users.noreply.github.com>\nCo-authored-by: Javier Rodríguez Chatruc <49622509+jrchatruc@users.noreply.github.com>",
          "timestamp": "2025-06-24T16:46:08Z",
          "tree_id": "2da6943241aaa38aba591c90dbd14323dd54d0ab",
          "url": "https://github.com/MozirDmitriy/ethrex/commit/196a17b1e734d7510cb48192b944361641ea29c3"
        },
        "date": 1750793174701,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 219844490108,
            "range": "± 361314238",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "estebandh@gmail.com",
            "name": "ElFantasma",
            "username": "ElFantasma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49fde90e24ca437c2fbc0caf8ba81d2820faad0b",
          "message": "chore(l1): preventing errors to propagate to spawned (#3840)\n\n**Motivation**\n\nError lines in spawned logs [were\nmuted](https://github.com/lambdaclass/ethrex/pull/3467) because there\nwas a lot of spam regarding failed connections and handshakes. That was\nnot safe as other important problems may get muted too.\n\n**Description**\n\nThis PR handles the connection errors on handshake and initialization\nand logs a lower priority log line (debug) as it is pretty common.\n\nIt also reverts the log directive to mute spawned initialization errors.\n\nit requires [spawned\n0.2.2](https://github.com/lambdaclass/spawned/pull/39).\n\nCloses #3472",
          "timestamp": "2025-08-04T16:25:48Z",
          "tree_id": "36fdd705fd3162a82dd9e4616806878c0705ccec",
          "url": "https://github.com/MozirDmitriy/ethrex/commit/49fde90e24ca437c2fbc0caf8ba81d2820faad0b"
        },
        "date": 1754339474967,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 164900720785,
            "range": "± 551968938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rodrigooliveri10@gmail.com",
            "name": "Rodrigo Oliveri",
            "username": "rodrigo-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d85e6d4d6641b0c4c82583ea5c0a231bd4b17d92",
          "message": "chore(l1): cache tx hash (#4049)\n\n**Motivation**\n\nWe saw that the hashing of txs takes a significant amount of time and\npart of it is repeated.\n\n**Description**\n\nThis PR create a new public hash function that allows to cache the\ncomputation of the hash for subsequent calls.\n\nAfter merging main there are some more changes needed. I'm taking a look\nat them.\n\nCloses #issue_number",
          "timestamp": "2025-08-18T21:43:40Z",
          "tree_id": "a5a65c360ff46435aa2d7d0ca14508f47123321f",
          "url": "https://github.com/MozirDmitriy/ethrex/commit/d85e6d4d6641b0c4c82583ea5c0a231bd4b17d92"
        },
        "date": 1755606123873,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 162216287837,
            "range": "± 462775887",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dmitriymozir@gmail.com",
            "name": "MozirDmitriy",
            "username": "MozirDmitriy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b35fe1d6e51fce8cb985b949f8e9b1efacc414ef",
          "message": "docs(levm): add detailed documentation for CallFrame backups and revert/merge logic (#4074)\n\n## Motivation\n\nThis pull request aims to improve the documentation for the Lambda EVM\nimplementation by providing a clear and detailed explanation of\nCallFrame backups. Proper documentation of this mechanism is essential\nfor both new and existing contributors to understand how state reversion\nand merging are handled during nested calls and transaction execution.\n\n## Description\n\nThis PR adds a comprehensive section to callframe.md that covers:\n\n- The structure and purpose of CallFrame backups.\n- When and why backups are created and used.\n- The logic for reverting and merging state changes during nested calls.\n- The importance of the order of operations (such as value transfer and\nnonce increment).\n- A practical example based on the generic_call function.\n- References to relevant code locations for further study.\nCloses #3071",
          "timestamp": "2025-09-09T10:35:18Z",
          "tree_id": "4684d2ea564ff77a41f143ee127adb20208c9ee3",
          "url": "https://github.com/MozirDmitriy/ethrex/commit/b35fe1d6e51fce8cb985b949f8e9b1efacc414ef"
        },
        "date": 1757424109265,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 169421427280,
            "range": "± 1616384162",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}