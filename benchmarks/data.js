window.BENCHMARK_DATA = {
  "lastUpdate": 1750793176949,
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
      }
    ]
  }
}