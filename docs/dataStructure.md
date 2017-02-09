# Data Structures

## Status (object) - ステータス
+ status: 0 (number, required) - 0:成功, others:失敗
+ error: 数値が大きすぎます (string, optional) - エラーメッセージ

## Comment (object) - コメント
+ text: よかった (string, required) - コメント本文です
+ date: 2016-01-01 (string, required) - 日付
+ used: 1000 (number, optional) - 使った金額

## Comments (array)
+ comments: array(Comment)

## Shop (object) - お店情報
+ id: `01-001` (string, required) - ID
+ name: ここは食べるための店 (string, required) - 店名
+ price: 1000 (number, required) - 予算
+ comments:  (Comments, optional) - コメント

## Shops (array)
+ (Shop)

## MyPage (object) - マイページ情報
+ entryShops: (array[Shop], optional)

## MyPages (array)
+ (MyPage)