# 線上點餐系統

這個專案用 Google 試算表當資料庫，用 Google Apps Script 當雲端後端與網頁。第一版已包含顧客點菜、櫃台接單、訂單狀態、付款狀態、每日營收、熱賣排行、備料估算與通知設定。

## 檔案

- `gas/Code.gs`：GAS 後端，建立分頁、讀菜單、寫訂單、更新狀態、產生報表。
- `gas/ImageData.gs`：已下載並壓縮後內嵌的菜單圖片資料。
- `gas/Index.html`：顧客點菜頁。
- `gas/Admin.html`：櫃台管理頁，網址加 `?page=admin`。
- `gas/Status.html`：顧客查詢頁，網址加 `?page=status&order=訂單編號`。
- `gas/appsscript.json`：Apps Script 專案設定與授權範圍。
- `docs/index.html`：可放到 GitHub Pages 的顧客點餐前台。
- `data/*.csv`：菜單、加點、備料和設定資料模板。

## 部署

1. 到 Google Drive 建立新的 Google 試算表，例如「線上點菜系統」。
2. 在試算表點「擴充功能」->「Apps Script」。
3. 把 `gas/Code.gs` 貼到 Apps Script 的 `Code.gs`。
4. 新增 HTML 檔案 `Index`，貼上 `gas/Index.html`。
5. 新增 HTML 檔案 `Admin`，貼上 `gas/Admin.html`。
6. 新增 HTML 檔案 `Status`，貼上 `gas/Status.html`。
7. 在 Apps Script 專案設定打開「在編輯器中顯示 appsscript.json」，貼上 `gas/appsscript.json`。
8. 儲存後，在函式下拉選單選 `setupSpreadsheet`，按「執行」並完成授權。
9. 回到試算表確認底部已建立這些分頁：
   `菜單`、`加點`、`訂單`、`訂單明細`、`備料規則`、`每日營收`、`品項排行`、`食材用量`、`系統設定`
10. 點「部署」->「新增部署作業」-> 類型選「網頁應用程式」。
11. 執行身分選「我」，存取權選「任何人」或依店內需求調整。
12. 複製 Web App URL。

## 使用網址

- 顧客點菜：部署後的 Web App URL
- 櫃台管理：`Web App URL?page=admin`
- 訂單查詢：`Web App URL?page=status&order=訂單編號`

## GitHub Pages + GAS 前台

這個專案已可改成「GitHub Pages 顯示前台、GAS 寫入 Google Sheet」的架構。

- GitHub Pages：使用 `docs/index.html`，顯示顧客點餐頁。
- GAS：保留 `gas/Code.gs` 作為 API、後台管理與報表。
- Google Sheet：繼續作為菜單、訂單與報表資料庫。

GitHub Pages 啟用方式：

1. 把此專案推到 GitHub repository。
2. 到 repository 的 `Settings` -> `Pages`。
3. Source 選 `Deploy from a branch`。
4. Branch 選主要分支，Folder 選 `/docs`。
5. 儲存後，GitHub Pages 提供的網址就是顧客點餐前台。

目前 `docs/index.html` 已設定連到這個 GAS API：

`https://script.google.com/macros/s/AKfycbx9pU_ESK4sqTvOD0Zc0rP6RYbqoJXMKLmJ7KnfMnpECodOI2l0qhiRs0SpYSlJ1xWp/exec`

若你之後重新建立 Apps Script 部署，請同步修改 `docs/index.html` 裡的 `GAS_API_URL`。

外部前台使用的 API：

- `GET Web App URL?action=getAppData&callback=函式名稱`
- `GET Web App URL?action=getOrderStatus&order=訂單編號&callback=函式名稱`
- `POST Web App URL`，表單欄位帶 `action=submitOrder`、`payload=訂單JSON`

後台管理仍使用：

`Web App URL?page=admin`

## 試算表分頁

- `菜單`：主餐資料。改價格、名稱、排序、啟用狀態後，顧客頁會跟著變。
- `加點`：加點資料。
- `訂單`：訂單總表，包含付款方式、付款狀態、訂單狀態、取餐碼。
- `訂單明細`：每張訂單的餐點與加點明細。
- `備料規則`：備料換算規則。可用 `品項編號`、`加點編號` 或 `選項` 對應食材。
- `每日營收`：每日營收、訂單數、付款狀態統計。
- `品項排行`：品項銷售排行。
- `食材用量`：依訂單估算食材消耗。
- `系統設定`：店名、付款方式、狀態清單、管理 PIN、通知設定。

## 現場流程

1. 客人從顧客點菜頁送出訂單。
2. `訂單` 會新增一筆總表資料，`訂單明細` 會新增明細。
3. 櫃台開 `?page=admin`，把狀態從 `新訂單` 改成 `製作中`、`完成`、`已取餐`。
4. 收款後把付款狀態改成 `已付款`。
5. 報表分頁會在送單、改狀態或按管理頁「更新報表」時重新整理。

## 管理 PIN

`系統設定` 的 `管理PIN` 預設是空白，代表管理頁不鎖。正式公開前建議填一組 PIN，例如 `1234`。填了之後，`?page=admin` 會要求輸入 PIN 才能看訂單與改狀態。

## 通知

在 `系統設定` 可以設定：

- Email：把 `Email通知啟用` 改成 `true`，並在 `Email通知收件人` 填收件信箱。
- Google Chat：在 `Google Chat Webhook網址` 填 webhook URL。
- LINE Messaging API：填 `LINE頻道權杖` 和 `LINE收件者ID`。

通知失敗不會阻止訂單寫入。

## 菜單備註

菜色已依照 `menu.webp` 整理為拉麵、加料、單點、炸物與飲品。重新部署後，系統會用 `菜單版本` 自動把舊菜單更新成 `menu-webp-20260522` 版本一次，之後仍可直接在試算表修改名稱、價格與排序。

## 菜單圖片

顧客點餐頁會顯示從 `menu.webp` 裁切並壓縮後內嵌的主餐圖片，裁切紀錄在 `assets/menu-images/sources.csv`。試算表的 `圖片網址` 欄位可留空使用內建圖片，也可以填自己的圖片網址覆蓋預設圖。

## 中文欄位

試算表分頁名稱與欄位已改成中文。若你之前已經建立過英文分頁，重新執行 `setupSpreadsheet()` 時會盡量把舊分頁改名並保留資料。
