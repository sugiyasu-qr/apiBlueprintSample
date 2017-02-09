# Group お店情報
 
## 全取得 [GET /shops/all/]

### 処理概要

全店の情報を返します。

### 使用方法

+ Request
    + Headers
        Accept: application/json
+ Response 200 (application/json)
    + Attributes
        + status: (Status, required) - ステータス情報
        + shops: (Shops, required) - お店情報
        
## 一店のみ取得 [GET /shops/]

### 処理概要

一つのお店の情報を返します。

### 使用方法

+ Request
    + Headers
        Accept: application/json
    + Attributes
        + id: `01-001` (string, required) - お店ID
+ Response 200 (application/json)
    + Attributes
        + status: (Status, required) - ステータス情報
        + shop: (Shop, required) - お店情報

