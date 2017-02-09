# Group マイページ情報
 
## 全取得 [GET /mypage/all/]

### 処理概要

全マイページ情報を返します。

### 使用方法

+ Request
    + Headers
        Accept: application/json
+ Response 200 (application/json)
    + Attributes
        + status: (Status, required) - ステータス情報
        + myPages: (MyPages, required) - マイページ情報
        
## マイページを登録 [POST /mypage/entry/]

### 処理概要

お店を登録します。

### 使用方法

+ Request
    + Headers
        Accept: application/json
    + Attributes
        + shop: (Shop, required) - お店ID
+ Response 200 (application/json)
    + Attributes
        + status: (Status, required) - ステータス情報

