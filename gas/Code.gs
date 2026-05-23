const SHEETS = {
  MENU: '菜單',
  ADDONS: '加點',
  ORDERS: '訂單',
  ORDER_ITEMS: '訂單明細',
  RECIPES: '備料規則',
  DAILY_SUMMARY: '每日營收',
  ITEM_SUMMARY: '品項排行',
  INGREDIENT_USAGE: '食材用量',
  SETTINGS: '系統設定',
};

const HEADERS = {
  [SHEETS.MENU]: ['編號', '分類', '名稱', '大小', '價格', '啟用', '排序', '可選選項', '圖片網址', '備註'],
  [SHEETS.ADDONS]: ['編號', '名稱', '價格', '啟用', '排序', '圖片網址', '備註'],
  [SHEETS.ORDERS]: [
    '訂單編號',
    '建立時間',
    '用餐方式',
    '顧客姓名',
    '電話',
    '桌號',
    '顧客備註',
    '餐點小計',
    '加點小計',
    '總計',
    '付款方式',
    '付款狀態',
    '訂單狀態',
    '完成時間',
    '取餐碼',
    '櫃台備註',
  ],
  [SHEETS.ORDER_ITEMS]: [
    '訂單編號',
    '類型',
    '品項編號',
    '品項名稱',
    '大小',
    '選項',
    '單價',
    '數量',
    '小計',
    '備註',
  ],
  [SHEETS.RECIPES]: ['對應類型', '對應值', '食材', '單位', '每份用量', '啟用', '備註'],
  [SHEETS.DAILY_SUMMARY]: [
    '日期',
    '訂單數',
    '已付款訂單',
    '未付款訂單',
    '取消訂單',
    '餐點小計',
    '加點小計',
    '總計',
    '現金總計',
    'LINE Pay總計',
    '其他付款總計',
    '平均客單價',
  ],
  [SHEETS.ITEM_SUMMARY]: ['排行', '品項索引', '類型', '品項名稱', '大小', '選項', '數量', '營收'],
  [SHEETS.INGREDIENT_USAGE]: ['食材', '單位', '數量', '來源'],
  [SHEETS.SETTINGS]: ['設定項目', '設定值'],
};

const LEGACY_SHEET_NAMES = {
  [SHEETS.MENU]: 'Menu',
  [SHEETS.ADDONS]: 'AddOns',
  [SHEETS.ORDERS]: 'Orders',
  [SHEETS.ORDER_ITEMS]: 'OrderItems',
  [SHEETS.RECIPES]: 'Recipes',
  [SHEETS.DAILY_SUMMARY]: 'DailySummary',
  [SHEETS.ITEM_SUMMARY]: 'ItemSummary',
  [SHEETS.INGREDIENT_USAGE]: 'IngredientUsage',
  [SHEETS.SETTINGS]: 'Settings',
};

const HEADER_ALIASES = {
  id: 'id',
  編號: 'id',
  category: 'category',
  分類: 'category',
  name: 'name',
  名稱: 'name',
  size: 'size',
  大小: 'size',
  price: 'price',
  價格: 'price',
  enabled: 'enabled',
  啟用: 'enabled',
  sort: 'sort',
  排序: 'sort',
  options: 'options',
  可選選項: 'options',
  image_url: 'image_url',
  圖片網址: 'image_url',
  note: 'note',
  備註: 'note',
  order_id: 'order_id',
  訂單編號: 'order_id',
  created_at: 'created_at',
  建立時間: 'created_at',
  service_type: 'service_type',
  用餐方式: 'service_type',
  customer_name: 'customer_name',
  顧客姓名: 'customer_name',
  phone: 'phone',
  電話: 'phone',
  table_no: 'table_no',
  桌號: 'table_no',
  顧客備註: 'note',
  subtotal: 'subtotal',
  餐點小計: 'subtotal',
  addon_total: 'addon_total',
  加點小計: 'addon_total',
  total: 'total',
  總計: 'total',
  payment_method: 'payment_method',
  付款方式: 'payment_method',
  payment_status: 'payment_status',
  付款狀態: 'payment_status',
  status: 'status',
  訂單狀態: 'status',
  finished_at: 'finished_at',
  完成時間: 'finished_at',
  pickup_code: 'pickup_code',
  取餐碼: 'pickup_code',
  admin_note: 'admin_note',
  櫃台備註: 'admin_note',
  line_type: 'line_type',
  類型: 'line_type',
  item_id: 'item_id',
  品項編號: 'item_id',
  item_name: 'item_name',
  品項名稱: 'item_name',
  option: 'option',
  選項: 'option',
  unit_price: 'unit_price',
  單價: 'unit_price',
  quantity: 'quantity',
  數量: 'quantity',
  line_total: 'line_total',
  小計: 'line_total',
  match_type: 'match_type',
  對應類型: 'match_type',
  match_value: 'match_value',
  對應值: 'match_value',
  ingredient: 'ingredient',
  食材: 'ingredient',
  unit: 'unit',
  單位: 'unit',
  qty_per_qty: 'qty_per_qty',
  每份用量: 'qty_per_qty',
  date: 'date',
  日期: 'date',
  orders: 'orders',
  訂單數: 'orders',
  paid_orders: 'paid_orders',
  已付款訂單: 'paid_orders',
  unpaid_orders: 'unpaid_orders',
  未付款訂單: 'unpaid_orders',
  canceled_orders: 'canceled_orders',
  取消訂單: 'canceled_orders',
  cash_total: 'cash_total',
  現金總計: 'cash_total',
  line_pay_total: 'line_pay_total',
  'LINE Pay總計': 'line_pay_total',
  other_total: 'other_total',
  其他付款總計: 'other_total',
  average_order_value: 'average_order_value',
  平均客單價: 'average_order_value',
  rank: 'rank',
  排行: 'rank',
  item_key: 'item_key',
  品項索引: 'item_key',
  revenue: 'revenue',
  營收: 'revenue',
  source: 'source',
  來源: 'source',
  key: 'key',
  設定項目: 'key',
  設定鍵: 'key',
  value: 'value',
  設定值: 'value',
};

const SETTING_KEY_ALIASES = {
  store_name: 'store_name',
  店名: 'store_name',
  currency: 'currency',
  貨幣符號: 'currency',
  default_status: 'default_status',
  預設訂單狀態: 'default_status',
  default_payment_status: 'default_payment_status',
  預設付款狀態: 'default_payment_status',
  order_statuses: 'order_statuses',
  訂單狀態清單: 'order_statuses',
  payment_methods: 'payment_methods',
  付款方式清單: 'payment_methods',
  payment_statuses: 'payment_statuses',
  付款狀態清單: 'payment_statuses',
  admin_pin: 'admin_pin',
  管理PIN: 'admin_pin',
  notify_email_enabled: 'notify_email_enabled',
  Email通知啟用: 'notify_email_enabled',
  notify_email_to: 'notify_email_to',
  Email通知收件人: 'notify_email_to',
  google_chat_webhook_url: 'google_chat_webhook_url',
  'Google Chat Webhook': 'google_chat_webhook_url',
  GoogleChatWebhook網址: 'google_chat_webhook_url',
  'Google Chat Webhook網址': 'google_chat_webhook_url',
  line_channel_access_token: 'line_channel_access_token',
  'LINE Channel Access Token': 'line_channel_access_token',
  LINE頻道權杖: 'line_channel_access_token',
  line_to: 'line_to',
  LINE收件者ID: 'line_to',
  menu_version: 'menu_version',
  菜單版本: 'menu_version',
};

const SETTING_DISPLAY_LABELS = {
  store_name: '店名',
  currency: '貨幣符號',
  default_status: '預設訂單狀態',
  default_payment_status: '預設付款狀態',
  order_statuses: '訂單狀態清單',
  payment_methods: '付款方式清單',
  payment_statuses: '付款狀態清單',
  admin_pin: '管理PIN',
  notify_email_enabled: 'Email通知啟用',
  notify_email_to: 'Email通知收件人',
  google_chat_webhook_url: 'Google Chat Webhook網址',
  line_channel_access_token: 'LINE頻道權杖',
  line_to: 'LINE收件者ID',
  menu_version: '菜單版本',
};

const RECIPE_MATCH_DISPLAY_LABELS = {
  item_id: '品項編號',
  addon_id: '加點編號',
  option: '選項',
};

const MENU_DATA_VERSION = 'menu-webp-20260522';
const SPREADSHEET_READY_CACHE_KEY = 'ordering_setup_ready_20260524_webp';
const SPREADSHEET_READY_CACHE_SECONDS = 21600;
const WEB_APP_URL_FALLBACK =
  'https://script.google.com/macros/s/AKfycbx9pU_ESK4sqTvOD0Zc0rP6RYbqoJXMKLmJ7KnfMnpECodOI2l0qhiRs0SpYSlJ1xWp/exec';

const DEFAULT_MENU_IMAGES = {
  R001: 'R001',
  R002: 'R002',
  R003: 'R003',
  R004: 'R004',
  R005: 'R005',
  R006: 'R006',
  R007: 'R007',
  R008: 'R008',
  R009: 'R009',
  R010: 'R010',
  R011: 'R011',
  R012: 'R012',
  R013: 'R013',
};

const DEFAULT_ADDON_IMAGES = {};

const SEED_MENU = [
  ['R001', '人氣拉麵', '究極海老王拉麵', '', 300, true, 10, '', '', 'Ultimate Shrimp King Ramen'],
  ['R002', '人氣拉麵', '椒麻味噌拉麵', '', 300, true, 20, '', '', 'Sichuan Pepper Miso Ramen'],
  ['R003', '人氣拉麵', '炙白筍拉麵', '', 300, true, 30, '', '', 'Grilled Bamboo Ramen'],
  ['R004', '人氣拉麵', '塩豚蔥花拉麵', '', 240, true, 40, '', '', 'Shio Pork Ramen'],
  ['R005', '人氣拉麵', '豚骨叉燒大蒜拉麵', '', 300, true, 50, '', '', 'Garlic Tonkotsu Ramen'],
  ['R006', '經典拉麵', '香菜拉麵', '', 260, true, 110, '', '', 'Cilantro Ramen'],
  ['R007', '經典拉麵', '黑蒜拉麵', '', 230, true, 120, '', '', 'Black Garlic Ramen'],
  ['R008', '經典拉麵', '地獄拉麵', '', 230, true, 130, '', '', 'Hell Ramen'],
  ['R009', '經典拉麵', '辛豚骨拉麵', '', 210, true, 140, '', '', 'Spicy Tonkotsu Ramen'],
  ['R010', '經典拉麵', '味噌拉麵', '', 200, true, 150, '', '', 'Miso Ramen'],
  ['R011', '經典拉麵', '豚骨拉麵', '', 190, true, 160, '', '', 'Tonkotsu Ramen'],
  ['R012', '經典拉麵', '豚骨醬油拉麵', '', 190, true, 170, '', '', 'Tonkotsu Shoyu Ramen'],
  ['R013', '經典拉麵', '醬油拉麵', '', 170, true, 180, '', '', 'Shoyu Ramen'],
];

const SEED_ADDONS = [
  ['T001', '加料 - 加麵', 30, true, 10, '', 'Extra Noodles'],
  ['T002', '加料 - 溏心蛋(x1)', 30, true, 20, '', 'Soft Boiled Egg'],
  ['T003', '加料 - 玉米', 40, true, 30, '', 'Corn'],
  ['T004', '加料 - 海苔', 40, true, 40, '', 'Seaweed'],
  ['T005', '加料 - 青蔥', 70, true, 50, '', 'Scallions'],
  ['T006', '加料 - 炙燒肉(x5)', 120, true, 60, '', 'Seared Pork'],
  ['S001', '單點 - 黃金海帶絲', 60, true, 110, '', 'Seasoned Kelp Strips'],
  ['S002', '單點 - 黃金泡菜', 70, true, 120, '', 'Golden Kimchi'],
  ['S003', '單點 - 霜淇淋', 80, true, 130, '', 'Soft Serve Ice Cream'],
  ['F001', '炸物 - 洋蔥圈', 60, true, 210, '', 'Onion Rings'],
  ['F002', '炸物 - 起士條', 60, true, 220, '', 'Cheese Sticks'],
  ['F003', '炸物 - 黃金脆薯', 60, true, 230, '', 'Crispy Fries'],
  ['F004', '炸物 - 雞蛋豆腐', 60, true, 240, '', 'Fried Egg Tofu'],
  ['F005', '炸物 - 南瓜可樂餅(x2)', 80, true, 250, '', 'Pumpkin Croquette'],
  ['F006', '炸物 - 唐揚炸雞', 90, true, 260, '', 'Japanese Fried Chicken'],
  ['F007', '炸物 - 炸牡蠣(x3)', 100, true, 270, '', 'Fried Oysters'],
  ['D001', '飲品 - 可爾必思', 40, true, 310, '', 'Calpis'],
  ['D002', '飲品 - 麒麟一番榨', 70, true, 320, '', 'Kirin Ichiban Beer'],
];

const SEED_RECIPES = [
  ['品項編號', 'R001', '拉麵', '份', 1, true, '究極海老王拉麵'],
  ['品項編號', 'R001', '海老湯底', '份', 1, true, '究極海老王拉麵'],
  ['品項編號', 'R002', '拉麵', '份', 1, true, '椒麻味噌拉麵'],
  ['品項編號', 'R002', '椒麻味噌湯底', '份', 1, true, '椒麻味噌拉麵'],
  ['品項編號', 'R003', '拉麵', '份', 1, true, '炙白筍拉麵'],
  ['品項編號', 'R003', '白筍', '份', 1, true, '炙白筍拉麵'],
  ['品項編號', 'R004', '拉麵', '份', 1, true, '塩豚蔥花拉麵'],
  ['品項編號', 'R004', '青蔥', '份', 1, true, '塩豚蔥花拉麵'],
  ['品項編號', 'R005', '拉麵', '份', 1, true, '豚骨叉燒大蒜拉麵'],
  ['品項編號', 'R005', '叉燒', '份', 1, true, '豚骨叉燒大蒜拉麵'],
  ['品項編號', 'R006', '拉麵', '份', 1, true, '香菜拉麵'],
  ['品項編號', 'R006', '香菜', '份', 1, true, '香菜拉麵'],
  ['品項編號', 'R007', '拉麵', '份', 1, true, '黑蒜拉麵'],
  ['品項編號', 'R007', '黑蒜醬', '份', 1, true, '黑蒜拉麵'],
  ['品項編號', 'R008', '拉麵', '份', 1, true, '地獄拉麵'],
  ['品項編號', 'R008', '辣味湯底', '份', 1, true, '地獄拉麵'],
  ['品項編號', 'R009', '拉麵', '份', 1, true, '辛豚骨拉麵'],
  ['品項編號', 'R010', '拉麵', '份', 1, true, '味噌拉麵'],
  ['品項編號', 'R011', '拉麵', '份', 1, true, '豚骨拉麵'],
  ['品項編號', 'R012', '拉麵', '份', 1, true, '豚骨醬油拉麵'],
  ['品項編號', 'R013', '拉麵', '份', 1, true, '醬油拉麵'],
  ['加點編號', 'T001', '拉麵', '份', 1, true, '加麵'],
  ['加點編號', 'T002', '溏心蛋', '顆', 1, true, ''],
  ['加點編號', 'T003', '玉米', '份', 1, true, ''],
  ['加點編號', 'T004', '海苔', '份', 1, true, ''],
  ['加點編號', 'T005', '青蔥', '份', 1, true, ''],
  ['加點編號', 'T006', '炙燒肉', '片', 5, true, ''],
];

const SEED_SETTINGS = [
  ['店名', '線上點餐系統'],
  ['貨幣符號', 'NT$'],
  ['預設訂單狀態', '新訂單'],
  ['預設付款狀態', '未付款'],
  ['訂單狀態清單', '新訂單,製作中,完成,已取餐,取消'],
  ['付款方式清單', '現金,LINE Pay,街口支付,轉帳,其他'],
  ['付款狀態清單', '未付款,已付款,退款,免收'],
  ['管理PIN', ''],
  ['Email通知啟用', 'false'],
  ['Email通知收件人', ''],
  ['Google Chat Webhook網址', ''],
  ['LINE頻道權杖', ''],
  ['LINE收件者ID', ''],
];

function doGet(e) {
  const action = String((e && e.parameter && e.parameter.action) || '').trim();
  if (action) return handleApiGet_(e);

  ensureSpreadsheetReady_();
  const page = String((e && e.parameter && e.parameter.page) || '').toLowerCase();
  const fileName = page === 'admin' ? 'Admin' : page === 'status' ? 'Status' : 'Index';
  const template = HtmlService.createTemplateFromFile(fileName);
  template.webAppUrl = getWebAppUrl_();
  return template
    .evaluate()
    .setTitle(getSetting_('store_name') || '線上點餐系統')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function doPost(e) {
  return handleApiPost_(e);
}

function handleApiGet_(e) {
  try {
    const action = String((e && e.parameter && e.parameter.action) || '').trim();
    if (action === 'getAppData') return apiJsonOutput_(getAppData(), e);
    if (action === 'getOrderStatus') {
      const orderId = (e.parameter && (e.parameter.order || e.parameter.orderId)) || '';
      return apiJsonOutput_(getOrderStatus(orderId), e);
    }
    if (action === 'ping') {
      return apiJsonOutput_({ ok: true, webAppUrl: getWebAppUrl_(), now: formatDate_(new Date()) }, e);
    }
    throw new Error('不支援的 API：' + action);
  } catch (error) {
    return apiJsonOutput_({ ok: false, error: getErrorMessage_(error) }, e);
  }
}

function handleApiPost_(e) {
  let result;
  try {
    const action = String((e && e.parameter && e.parameter.action) || '').trim();
    if (action !== 'submitOrder') throw new Error('不支援的 API：' + action);
    result = { ok: true, data: submitOrder(parseApiPayload_(e)) };
  } catch (error) {
    result = { ok: false, error: getErrorMessage_(error) };
  }

  if (e && e.parameter && e.parameter.requestId) return apiPostMessageOutput_(result, e);
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function apiJsonOutput_(data, e) {
  const response = data && data.ok === false && data.error ? data : { ok: true, data };
  const callback = getApiCallbackName_(e);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + JSON.stringify(response).replace(/</g, '\\u003c') + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}

function apiPostMessageOutput_(result, e) {
  const requestId = String((e && e.parameter && e.parameter.requestId) || '');
  const message = JSON.stringify({
    source: 'ordering-gas-api',
    requestId,
    response: result,
  }).replace(/</g, '\\u003c');

  return HtmlService.createHtmlOutput(
    '<!doctype html><html><body><script>parent.postMessage(' + message + ', "*");</script></body></html>'
  ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getApiCallbackName_(e) {
  const callback = String((e && e.parameter && (e.parameter.callback || e.parameter.prefix)) || '').trim();
  if (!callback) return '';
  if (!/^[A-Za-z_$][0-9A-Za-z_$]*(\.[A-Za-z_$][0-9A-Za-z_$]*)*$/.test(callback)) {
    throw new Error('callback 名稱不合法');
  }
  return callback;
}

function parseApiPayload_(e) {
  const text = String((e && e.parameter && e.parameter.payload) || (e && e.postData && e.postData.contents) || '');
  if (!text) throw new Error('缺少訂單資料');
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error('訂單 JSON 格式錯誤');
  }
}

function getErrorMessage_(error) {
  return error && error.message ? error.message : String(error);
}

function ensureSpreadsheetReady_() {
  const cache = CacheService.getScriptCache();
  if (cache.get(SPREADSHEET_READY_CACHE_KEY)) return;
  setupSpreadsheet();
  cache.put(SPREADSHEET_READY_CACHE_KEY, 'true', SPREADSHEET_READY_CACHE_SECONDS);
}

function setupSpreadsheet() {
  const ss = getSpreadsheet_();
  ensureSheet_(ss, SHEETS.MENU, HEADERS[SHEETS.MENU], SEED_MENU);
  ensureSheet_(ss, SHEETS.ADDONS, HEADERS[SHEETS.ADDONS], SEED_ADDONS);
  ensureSheet_(ss, SHEETS.ORDERS, HEADERS[SHEETS.ORDERS], []);
  ensureSheet_(ss, SHEETS.ORDER_ITEMS, HEADERS[SHEETS.ORDER_ITEMS], []);
  ensureSheet_(ss, SHEETS.RECIPES, HEADERS[SHEETS.RECIPES], SEED_RECIPES);
  ensureSheet_(ss, SHEETS.DAILY_SUMMARY, HEADERS[SHEETS.DAILY_SUMMARY], []);
  ensureSheet_(ss, SHEETS.ITEM_SUMMARY, HEADERS[SHEETS.ITEM_SUMMARY], []);
  ensureSheet_(ss, SHEETS.INGREDIENT_USAGE, HEADERS[SHEETS.INGREDIENT_USAGE], []);
  ensureSheet_(ss, SHEETS.SETTINGS, HEADERS[SHEETS.SETTINGS], SEED_SETTINGS);
  ensureSettingRows_();
  normalizeSettingLabels_();
  ensureDefaultStoreTitle_();
  migrateMenuDataVersion_();
  normalizeRecipeMatchLabels_();
  normalizeOrderItemLineTypes_();
  formatSheets_(ss);
  return {
    spreadsheetUrl: ss.getUrl(),
    sheets: Object.values(SHEETS),
  };
}

function getAppData() {
  ensureSpreadsheetReady_();
  const settings = getSettings_();
  return {
    settings: getPublicSettings_(settings),
    menu: getMenuItems_(),
    addons: getAddonItems_(),
  };
}

function submitOrder(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('訂單資料格式錯誤');
  }

  const serviceType = String(payload.serviceType || '').trim();
  if (!['內用', '外帶'].includes(serviceType)) {
    throw new Error('請選擇內用或外帶');
  }

  setupSpreadsheet();
  const settings = getSettings_();
  const paymentMethods = splitOptions_(settings.payment_methods);
  const paymentMethod = normalizeListValue_(payload.paymentMethod, paymentMethods, paymentMethods[0] || '現金');
  const paymentStatus = settings.default_payment_status || '未付款';
  const status = settings.default_status || '新訂單';
  const items = Array.isArray(payload.items) ? payload.items : [];
  const addons = Array.isArray(payload.addons) ? payload.addons : [];
  if (!items.length && !addons.length) {
    throw new Error('請至少選擇一項餐點');
  }

  const menuMap = buildMap_(readTable_(SHEETS.MENU).filter((row) => isEnabled_(row.enabled)), 'id');
  const addonMap = buildMap_(readTable_(SHEETS.ADDONS).filter((row) => isEnabled_(row.enabled)), 'id');
  const orderLines = [];
  let subtotal = 0;
  let addonTotal = 0;

  items.forEach((line) => {
    const item = menuMap[String(line.id || '')];
    if (!item) throw new Error('餐點不存在或已停用：' + line.id);

    const quantity = normalizeQuantity_(line.quantity);
    const options = splitOptions_(item.options);
    const selectedOption = String(line.option || '').trim();
    if (options.length && !options.includes(selectedOption)) {
      throw new Error('請選擇餐點選項：' + item.name);
    }

    const unitPrice = Number(item.price || 0);
    const lineTotal = unitPrice * quantity;
    subtotal += lineTotal;
    orderLines.push([
      '餐點',
      String(item.id),
      String(item.name),
      String(item.size || ''),
      selectedOption,
      unitPrice,
      quantity,
      lineTotal,
      String(line.note || '').trim(),
    ]);
  });

  addons.forEach((line) => {
    const addon = addonMap[String(line.id || '')];
    if (!addon) throw new Error('加點不存在或已停用：' + line.id);

    const quantity = normalizeQuantity_(line.quantity);
    const unitPrice = Number(addon.price || 0);
    const lineTotal = unitPrice * quantity;
    addonTotal += lineTotal;
    orderLines.push([
      '加點',
      String(addon.id),
      String(addon.name),
      '',
      '',
      unitPrice,
      quantity,
      lineTotal,
      String(line.note || '').trim(),
    ]);
  });

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  let result;
  try {
    const ss = getSpreadsheet_();
    const orderId = makeOrderId_();
    const now = new Date();
    const total = subtotal + addonTotal;
    const pickupCode = makePickupCode_();

    ss.getSheetByName(SHEETS.ORDERS).appendRow([
      orderId,
      now,
      serviceType,
      String(payload.customerName || '').trim(),
      String(payload.phone || '').trim(),
      String(payload.tableNo || '').trim(),
      String(payload.note || '').trim(),
      subtotal,
      addonTotal,
      total,
      paymentMethod,
      paymentStatus,
      status,
      '',
      pickupCode,
      '',
    ]);

    const itemRows = orderLines.map((line) => [orderId].concat(line));
    if (itemRows.length) {
      const sheet = ss.getSheetByName(SHEETS.ORDER_ITEMS);
      sheet.getRange(sheet.getLastRow() + 1, 1, itemRows.length, itemRows[0].length).setValues(itemRows);
    }

    result = {
      ok: true,
      orderId,
      pickupCode,
      total,
      status,
      paymentMethod,
      paymentStatus,
      createdAt: formatDate_(now),
      statusUrl: buildStatusUrl_(orderId),
    };
  } finally {
    lock.releaseLock();
  }

  refreshReports();
  sendOrderNotifications_(result.orderId);
  return result;
}

function getAdminBootstrap() {
  ensureSpreadsheetReady_();
  const settings = getSettings_();
  return {
    storeName: settings.store_name || '線上點餐系統',
    requiresPin: Boolean(String(settings.admin_pin || '').trim()),
    webAppUrl: getWebAppUrl_(),
  };
}

function getAdminData(pin) {
  setupSpreadsheet();
  requireAdmin_(pin);
  refreshReports();

  const settings = getSettings_();
  const allItems = readTable_(SHEETS.ORDER_ITEMS);
  const orders = readTable_(SHEETS.ORDERS)
    .map((row) => getOrderDetailFromRow_(row, allItems))
    .sort((a, b) => String(b.created_at_sort).localeCompare(String(a.created_at_sort)))
    .slice(0, 80);

  return {
    settings: getPublicSettings_(settings),
    notification: {
      emailEnabled: isEnabled_(settings.notify_email_enabled),
      emailTo: settings.notify_email_to || '',
      googleChatEnabled: Boolean(String(settings.google_chat_webhook_url || '').trim()),
      lineEnabled: Boolean(String(settings.line_channel_access_token || '').trim() && String(settings.line_to || '').trim()),
    },
    metrics: getDashboardMetrics_(),
    catalog: getAdminCatalog_(),
    orders,
  };
}

function refreshAdminReports(pin) {
  setupSpreadsheet();
  requireAdmin_(pin);
  return refreshReports();
}

function saveCatalogItem(payload, pin) {
  setupSpreadsheet();
  requireAdmin_(pin);

  const type = normalizeCatalogType_(payload && payload.type);
  const rows = readTable_(type === 'menu' ? SHEETS.MENU : SHEETS.ADDONS);
  const id = String((payload && payload.id) || '').trim() || makeCatalogId_(type, rows);
  const sheetName = type === 'menu' ? SHEETS.MENU : SHEETS.ADDONS;
  const headers = HEADERS[sheetName];
  const rowValues = buildCatalogRow_(type, payload || {}, id);
  const sheet = getSpreadsheet_().getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();
  const headerKeys = values[0].map((header) => normalizeHeader_(header));
  const idCol = headerKeys.indexOf('id');
  const rowIndex = values.findIndex((row, index) => index > 0 && String(row[idCol]).trim() === id);

  if (rowIndex >= 1) {
    sheet.getRange(rowIndex + 1, 1, 1, headers.length).setValues([rowValues]);
  } else {
    sheet.appendRow(rowValues);
  }

  formatSheets_(getSpreadsheet_());
  refreshReports();
  return getAdminData(pin);
}

function toggleCatalogItem(type, id, enabled, pin) {
  setupSpreadsheet();
  requireAdmin_(pin);

  const catalogType = normalizeCatalogType_(type);
  const sheetName = catalogType === 'menu' ? SHEETS.MENU : SHEETS.ADDONS;
  const sheet = getSpreadsheet_().getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map((header) => normalizeHeader_(header));
  const idCol = headers.indexOf('id');
  const enabledCol = headers.indexOf('enabled');
  const rowIndex = data.findIndex((row, index) => index > 0 && String(row[idCol]).trim() === String(id || '').trim());
  if (rowIndex < 1) throw new Error('找不到品項：' + id);

  sheet.getRange(rowIndex + 1, enabledCol + 1).setValue(Boolean(enabled));
  formatSheets_(getSpreadsheet_());
  return getAdminData(pin);
}

function updateOrder(orderId, patch, pin) {
  setupSpreadsheet();
  requireAdmin_(pin);

  const cleanId = String(orderId || '').trim();
  if (!cleanId) throw new Error('缺少訂單編號');

  const settings = getSettings_();
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.ORDERS);
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map((header) => normalizeHeader_(header));
  const orderIdCol = headers.indexOf('order_id');
  const rowIndex = data.findIndex((row, index) => index > 0 && String(row[orderIdCol]) === cleanId);
  if (rowIndex < 1) throw new Error('找不到訂單：' + cleanId);

  const updates = {};
  if (patch.status !== undefined) {
    updates.status = normalizeListValue_(patch.status, splitOptions_(settings.order_statuses), '');
  }
  if (patch.paymentStatus !== undefined) {
    updates.payment_status = normalizeListValue_(patch.paymentStatus, splitOptions_(settings.payment_statuses), '');
  }
  if (patch.paymentMethod !== undefined) {
    updates.payment_method = normalizeListValue_(patch.paymentMethod, splitOptions_(settings.payment_methods), '');
  }
  if (patch.adminNote !== undefined) {
    updates.admin_note = String(patch.adminNote || '').trim();
  }

  if (updates.status && ['完成', '已取餐'].includes(updates.status)) {
    const finishedAtCol = headers.indexOf('finished_at');
    if (finishedAtCol >= 0 && !data[rowIndex][finishedAtCol]) updates.finished_at = new Date();
  }

  Object.keys(updates).forEach((key) => {
    const col = headers.indexOf(key);
    if (col >= 0) sheet.getRange(rowIndex + 1, col + 1).setValue(updates[key]);
  });

  refreshReports();
  return getOrderStatus(cleanId);
}

function getOrderStatus(orderId) {
  setupSpreadsheet();
  const cleanId = String(orderId || '').trim();
  if (!cleanId) throw new Error('請輸入訂單編號');

  const order = readTable_(SHEETS.ORDERS).find((row) => String(row.order_id) === cleanId);
  if (!order) return { found: false, orderId: cleanId };

  const detail = getOrderDetailFromRow_(order);
  return {
    found: true,
    order: detail,
  };
}

function refreshReports() {
  setupSpreadsheet();
  const reports = buildReports_();
  writeTable_(SHEETS.DAILY_SUMMARY, HEADERS[SHEETS.DAILY_SUMMARY], reports.dailyRows);
  writeTable_(SHEETS.ITEM_SUMMARY, HEADERS[SHEETS.ITEM_SUMMARY], reports.itemRows);
  writeTable_(SHEETS.INGREDIENT_USAGE, HEADERS[SHEETS.INGREDIENT_USAGE], reports.ingredientRows);
  formatSheets_(getSpreadsheet_());
  return {
    refreshedAt: formatDate_(new Date()),
    dailyRows: reports.dailyRows.length,
    itemRows: reports.itemRows.length,
    ingredientRows: reports.ingredientRows.length,
  };
}

function getMenuItems_() {
  return readTable_(SHEETS.MENU)
    .filter((row) => isEnabled_(row.enabled))
    .map((row) => ({
      id: String(row.id),
      category: String(row.category || '其他'),
      name: String(row.name),
      size: String(row.size || ''),
      price: Number(row.price || 0),
      sort: Number(row.sort || 0),
      options: splitOptions_(row.options),
      imageUrl: String(row.image_url || getDefaultMenuImage_(row.id) || ''),
      note: String(row.note || ''),
    }))
    .sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name, 'zh-Hant'));
}

function getAddonItems_() {
  return readTable_(SHEETS.ADDONS)
    .filter((row) => isEnabled_(row.enabled))
    .map((row) => ({
      id: String(row.id),
      name: String(row.name),
      price: Number(row.price || 0),
      sort: Number(row.sort || 0),
      imageUrl: String(row.image_url || getDefaultAddonImage_(row.id) || ''),
      note: String(row.note || ''),
    }))
    .sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name, 'zh-Hant'));
}

function getAdminCatalog_() {
  return {
    menu: readTable_(SHEETS.MENU)
      .map((row) => ({
        type: 'menu',
        id: String(row.id || ''),
        category: String(row.category || '其他'),
        name: String(row.name || ''),
        size: String(row.size || ''),
        price: Number(row.price || 0),
        enabled: isEnabled_(row.enabled),
        sort: Number(row.sort || 0),
        options: String(row.options || ''),
        imageUrl: String(row.image_url || getDefaultMenuImage_(row.id) || ''),
        imageUrlInput: String(row.image_url || ''),
        note: String(row.note || ''),
      }))
      .sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name, 'zh-Hant')),
    addons: readTable_(SHEETS.ADDONS)
      .map((row) => ({
        type: 'addon',
        id: String(row.id || ''),
        name: String(row.name || ''),
        price: Number(row.price || 0),
        enabled: isEnabled_(row.enabled),
        sort: Number(row.sort || 0),
        imageUrl: String(row.image_url || getDefaultAddonImage_(row.id) || ''),
        imageUrlInput: String(row.image_url || ''),
        note: String(row.note || ''),
      }))
      .sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name, 'zh-Hant')),
  };
}

function normalizeCatalogType_(type) {
  const text = String(type || '').trim().toLowerCase();
  return text === 'addon' || text === '加點' ? 'addon' : 'menu';
}

function buildCatalogRow_(type, payload, id) {
  const name = String(payload.name || '').trim();
  if (!name) throw new Error('品項名稱不可空白');

  const price = normalizeCatalogNumber_(payload.price, '價格', 0, 999999);
  const sort = normalizeCatalogNumber_(payload.sort, '排序', 0, 999999);
  const enabled = payload.enabled === true || isEnabled_(payload.enabled);
  const imageUrl = String(payload.imageUrl || '').trim();
  const note = String(payload.note || '').trim();

  if (type === 'addon') {
    return [id, name, price, enabled, sort, imageUrl, note];
  }

  return [
    id,
    String(payload.category || '其他').trim() || '其他',
    name,
    String(payload.size || '').trim(),
    price,
    enabled,
    sort,
    String(payload.options || '').trim(),
    imageUrl,
    note,
  ];
}

function normalizeCatalogNumber_(value, label, min, max) {
  const number = Number(value || 0);
  if (!Number.isFinite(number) || number < min || number > max) {
    throw new Error(label + '格式錯誤');
  }
  return Math.round(number);
}

function makeCatalogId_(type, rows) {
  const prefix = type === 'menu' ? 'R' : 'A';
  const matcher = new RegExp('^' + prefix + '(\\d+)$', 'i');
  const next =
    rows.reduce((max, row) => {
      const match = String(row.id || '').match(matcher);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
  return prefix + Utilities.formatString('%03d', next);
}

function getDefaultMenuImage_(itemId) {
  return getDefaultImage_(DEFAULT_MENU_IMAGES[String(itemId || '')]);
}

function getDefaultAddonImage_(itemId) {
  return getDefaultImage_(DEFAULT_ADDON_IMAGES[String(itemId || '')]);
}

function getDefaultImage_(imageKey) {
  if (!imageKey || typeof IMAGE_DATA === 'undefined') return '';
  return IMAGE_DATA[imageKey] || '';
}

function getOrderDetailFromRow_(order, allItems) {
  const orderId = String(order.order_id || '');
  const sourceItems = allItems || readTable_(SHEETS.ORDER_ITEMS);
  const items = sourceItems
    .filter((item) => String(item.order_id) === orderId)
    .map((item) => ({
      lineType: normalizeLineType_(item.line_type),
      itemId: String(item.item_id || ''),
      itemName: String(item.item_name || ''),
      size: String(item.size || ''),
      option: String(item.option || ''),
      unitPrice: Number(item.unit_price || 0),
      quantity: Number(item.quantity || 0),
      lineTotal: Number(item.line_total || 0),
      note: String(item.note || ''),
    }));

  return {
    orderId,
    createdAt: formatDateValue_(order.created_at),
    created_at_sort: formatDateValue_(order.created_at, 'yyyyMMddHHmmss'),
    serviceType: String(order.service_type || ''),
    customerName: String(order.customer_name || ''),
    phone: String(order.phone || ''),
    tableNo: String(order.table_no || ''),
    note: String(order.note || ''),
    subtotal: Number(order.subtotal || 0),
    addonTotal: Number(order.addon_total || 0),
    total: Number(order.total || 0),
    paymentMethod: String(order.payment_method || ''),
    paymentStatus: String(order.payment_status || ''),
    status: String(order.status || ''),
    finishedAt: formatDateValue_(order.finished_at),
    pickupCode: String(order.pickup_code || ''),
    adminNote: String(order.admin_note || ''),
    statusUrl: buildStatusUrl_(orderId),
    items,
  };
}

function getDashboardMetrics_() {
  const today = Utilities.formatDate(new Date(), getTimeZone_(), 'yyyy/MM/dd');
  const dailyRows = readTable_(SHEETS.DAILY_SUMMARY).map((row) => ({
    date: formatDateValue_(row.date, 'yyyy/MM/dd') || String(row.date || ''),
    orders: Number(row.orders || 0),
    paidOrders: Number(row.paid_orders || 0),
    unpaidOrders: Number(row.unpaid_orders || 0),
    canceledOrders: Number(row.canceled_orders || 0),
    subtotal: Number(row.subtotal || 0),
    addonTotal: Number(row.addon_total || 0),
    total: Number(row.total || 0),
    cashTotal: Number(row.cash_total || 0),
    linePayTotal: Number(row.line_pay_total || 0),
    otherTotal: Number(row.other_total || 0),
    averageOrderValue: Number(row.average_order_value || 0),
  }));
  const todayRow =
    dailyRows.find((row) => row.date === today) ||
    { date: today, orders: 0, paidOrders: 0, unpaidOrders: 0, canceledOrders: 0, total: 0, averageOrderValue: 0 };

  const orders = readTable_(SHEETS.ORDERS);
  const statusCounts = {};
  orders.forEach((order) => {
    const status = String(order.status || '新訂單');
    statusCounts[status] = (statusCounts[status] || 0) + 1;
  });

  return {
    today: todayRow,
    statusCounts,
    daily: dailyRows.slice(-14),
    topItems: readTable_(SHEETS.ITEM_SUMMARY)
      .slice(0, 10)
      .map((row) => ({
        rank: Number(row.rank || 0),
        itemName: String(row.item_name || ''),
        size: String(row.size || ''),
        option: String(row.option || ''),
        quantity: Number(row.quantity || 0),
        revenue: Number(row.revenue || 0),
      })),
    ingredientUsage: readTable_(SHEETS.INGREDIENT_USAGE)
      .slice(0, 20)
      .map((row) => ({
        ingredient: String(row.ingredient || ''),
        unit: String(row.unit || ''),
        quantity: Number(row.quantity || 0),
        source: String(row.source || ''),
      })),
    billing: buildBillingStats_(dailyRows),
    reports: buildOrderReports_(),
  };
}

function buildBillingStats_(dailyRows) {
  const today = Utilities.formatDate(new Date(), getTimeZone_(), 'yyyy/MM/dd');
  const overall = makeBillingBucket_();
  const todayStats = makeBillingBucket_();
  const paymentBreakdown = {};
  const openBills = [];

  readTable_(SHEETS.ORDERS).forEach((order) => {
    const date = formatDateValue_(order.created_at, 'yyyy/MM/dd') || '';
    const status = String(order.status || '');
    const paymentStatus = String(order.payment_status || '');
    const paymentMethod = String(order.payment_method || '其他') || '其他';
    const total = Number(order.total || 0);
    const bucket = date === today ? todayStats : null;

    addBillingOrder_(overall, status, paymentStatus, total);
    if (bucket) addBillingOrder_(bucket, status, paymentStatus, total);

    if (status !== '取消') {
      paymentBreakdown[paymentMethod] = (paymentBreakdown[paymentMethod] || 0) + total;
    }

    if (status !== '取消' && paymentStatus !== '已付款') {
      openBills.push({
        orderId: String(order.order_id || ''),
        createdAt: formatDateValue_(order.created_at),
        customerName: String(order.customer_name || ''),
        paymentMethod,
        paymentStatus,
        total,
      });
    }
  });

  return {
    overall,
    today: todayStats,
    paymentBreakdown: Object.keys(paymentBreakdown)
      .sort((a, b) => paymentBreakdown[b] - paymentBreakdown[a])
      .map((method) => ({ method, total: paymentBreakdown[method] })),
    recentDaily: (dailyRows || []).slice(-14),
    openBills: openBills
      .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
      .slice(0, 20),
  };
}

function makeBillingBucket_() {
  return {
    orders: 0,
    total: 0,
    paidOrders: 0,
    paidTotal: 0,
    unpaidOrders: 0,
    unpaidTotal: 0,
    canceledOrders: 0,
    canceledTotal: 0,
  };
}

function addBillingOrder_(bucket, status, paymentStatus, total) {
  if (status === '取消') {
    bucket.canceledOrders += 1;
    bucket.canceledTotal += total;
    return;
  }

  bucket.orders += 1;
  bucket.total += total;
  if (paymentStatus === '已付款') {
    bucket.paidOrders += 1;
    bucket.paidTotal += total;
  } else {
    bucket.unpaidOrders += 1;
    bucket.unpaidTotal += total;
  }
}

function buildOrderReports_() {
  const orders = readTable_(SHEETS.ORDERS);
  const items = readTable_(SHEETS.ORDER_ITEMS);
  const orderMap = buildMap_(orders, 'order_id');
  const buckets = {
    daily: {},
    weekly: {},
    monthly: {},
  };
  const orderPeriods = {};

  orders.forEach((order) => {
    const date = normalizeReportDate_(order.created_at);
    if (!date) return;

    const periods = {
      daily: {
        key: formatDateObject_(date, 'yyyyMMdd'),
        period: formatDateObject_(date, 'yyyy/MM/dd'),
      },
      weekly: getReportWeekPeriod_(date),
      monthly: {
        key: formatDateObject_(date, 'yyyyMM'),
        period: formatDateObject_(date, 'yyyy/MM'),
      },
    };
    orderPeriods[String(order.order_id || '')] = periods;

    Object.keys(periods).forEach((mode) => {
      const bucket = getReportBucket_(buckets[mode], periods[mode]);
      addReportOrder_(bucket, order);
    });
  });

  items.forEach((item) => {
    const periods = orderPeriods[String(item.order_id || '')];
    if (!periods) return;

    const order = orderMap[String(item.order_id || '')];
    if (order && String(order.status || '') === '取消') return;

    Object.keys(periods).forEach((mode) => {
      const bucket = getReportBucket_(buckets[mode], periods[mode]);
      bucket.itemQuantity += Number(item.quantity || 0);
    });
  });

  return {
    daily: buildReportMode_(buckets.daily, 31),
    weekly: buildReportMode_(buckets.weekly, 16),
    monthly: buildReportMode_(buckets.monthly, 18),
  };
}

function getReportBucket_(bucketMap, period) {
  if (!bucketMap[period.key]) {
    bucketMap[period.key] = {
      key: period.key,
      period: period.period,
      orders: 0,
      paidOrders: 0,
      unpaidOrders: 0,
      canceledOrders: 0,
      subtotal: 0,
      addonTotal: 0,
      total: 0,
      paidTotal: 0,
      unpaidTotal: 0,
      canceledTotal: 0,
      cashTotal: 0,
      linePayTotal: 0,
      otherTotal: 0,
      itemQuantity: 0,
      averageOrderValue: 0,
    };
  }
  return bucketMap[period.key];
}

function addReportOrder_(bucket, order) {
  const status = String(order.status || '');
  const paymentStatus = String(order.payment_status || '');
  const paymentMethod = String(order.payment_method || '');
  const subtotal = Number(order.subtotal || 0);
  const addonTotal = Number(order.addon_total || 0);
  const total = Number(order.total || 0);

  if (status === '取消') {
    bucket.canceledOrders += 1;
    bucket.canceledTotal += total;
    return;
  }

  bucket.orders += 1;
  bucket.subtotal += subtotal;
  bucket.addonTotal += addonTotal;
  bucket.total += total;

  if (paymentStatus === '已付款') {
    bucket.paidOrders += 1;
    bucket.paidTotal += total;
  } else {
    bucket.unpaidOrders += 1;
    bucket.unpaidTotal += total;
  }

  if (paymentMethod === '現金') bucket.cashTotal += total;
  else if (paymentMethod === 'LINE Pay') bucket.linePayTotal += total;
  else bucket.otherTotal += total;
}

function buildReportMode_(bucketMap, limit) {
  const rows = Object.values(bucketMap)
    .sort((a, b) => String(b.key).localeCompare(String(a.key)))
    .slice(0, limit)
    .map((row) => ({
      key: row.key,
      period: row.period,
      orders: row.orders,
      paidOrders: row.paidOrders,
      unpaidOrders: row.unpaidOrders,
      canceledOrders: row.canceledOrders,
      subtotal: row.subtotal,
      addonTotal: row.addonTotal,
      total: row.total,
      paidTotal: row.paidTotal,
      unpaidTotal: row.unpaidTotal,
      canceledTotal: row.canceledTotal,
      cashTotal: row.cashTotal,
      linePayTotal: row.linePayTotal,
      otherTotal: row.otherTotal,
      itemQuantity: row.itemQuantity,
      averageOrderValue: row.orders ? Math.round(row.total / row.orders) : 0,
    }));

  return {
    summary: summarizeReportRows_(rows),
    rows,
  };
}

function summarizeReportRows_(rows) {
  const summary = rows.reduce(
    (total, row) => {
      total.orders += Number(row.orders || 0);
      total.paidOrders += Number(row.paidOrders || 0);
      total.unpaidOrders += Number(row.unpaidOrders || 0);
      total.canceledOrders += Number(row.canceledOrders || 0);
      total.total += Number(row.total || 0);
      total.paidTotal += Number(row.paidTotal || 0);
      total.unpaidTotal += Number(row.unpaidTotal || 0);
      total.itemQuantity += Number(row.itemQuantity || 0);
      return total;
    },
    {
      orders: 0,
      paidOrders: 0,
      unpaidOrders: 0,
      canceledOrders: 0,
      total: 0,
      paidTotal: 0,
      unpaidTotal: 0,
      itemQuantity: 0,
      averageOrderValue: 0,
    }
  );
  summary.averageOrderValue = summary.orders ? Math.round(summary.total / summary.orders) : 0;
  return summary;
}

function normalizeReportDate_(value) {
  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), 12, 0, 0);
  }

  const match = String(value || '').match(/(\d{4})[/-](\d{1,2})[/-](\d{1,2})/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12, 0, 0);
}

function getReportWeekPeriod_(date) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
  const mondayOffset = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - mondayOffset);
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 12, 0, 0);
  end.setDate(end.getDate() + 6);

  return {
    key: formatDateObject_(start, 'yyyyMMdd'),
    period: formatDateObject_(start, 'yyyy/MM/dd') + ' - ' + formatDateObject_(end, 'yyyy/MM/dd'),
  };
}

function formatDateObject_(date, pattern) {
  return Utilities.formatDate(date, getTimeZone_(), pattern);
}

function buildReports_() {
  const orders = readTable_(SHEETS.ORDERS);
  const items = readTable_(SHEETS.ORDER_ITEMS);
  const orderMap = buildMap_(orders, 'order_id');
  const daily = {};
  const itemSummary = {};
  const ingredientUsage = {};
  const recipes = readTable_(SHEETS.RECIPES).filter((row) => isEnabled_(row.enabled));

  orders.forEach((order) => {
    const date = formatDateValue_(order.created_at, 'yyyy/MM/dd') || '';
    if (!date) return;
    const status = String(order.status || '');
    const total = Number(order.total || 0);
    const subtotal = Number(order.subtotal || 0);
    const addonTotal = Number(order.addon_total || 0);
    const paymentStatus = String(order.payment_status || '');
    const paymentMethod = String(order.payment_method || '');

    if (!daily[date]) {
      daily[date] = {
        date,
        orders: 0,
        paidOrders: 0,
        unpaidOrders: 0,
        canceledOrders: 0,
        subtotal: 0,
        addonTotal: 0,
        total: 0,
        cashTotal: 0,
        linePayTotal: 0,
        otherTotal: 0,
      };
    }

    if (status === '取消') {
      daily[date].canceledOrders += 1;
      return;
    }

    daily[date].orders += 1;
    if (paymentStatus === '已付款') daily[date].paidOrders += 1;
    else daily[date].unpaidOrders += 1;

    daily[date].subtotal += subtotal;
    daily[date].addonTotal += addonTotal;
    daily[date].total += total;
    if (paymentMethod === '現金') daily[date].cashTotal += total;
    else if (paymentMethod === 'LINE Pay') daily[date].linePayTotal += total;
    else daily[date].otherTotal += total;
  });

  items.forEach((item) => {
    const order = orderMap[String(item.order_id || '')];
    if (!order || String(order.status || '') === '取消') return;

    const quantity = Number(item.quantity || 0);
    const lineTotal = Number(item.line_total || 0);
    const key = [
      normalizeLineType_(item.line_type),
      String(item.item_id || ''),
      String(item.item_name || ''),
      String(item.size || ''),
      String(item.option || ''),
    ].join('|');

    if (!itemSummary[key]) {
      itemSummary[key] = {
        key,
        lineType: normalizeLineType_(item.line_type),
        itemName: String(item.item_name || ''),
        size: String(item.size || ''),
        option: String(item.option || ''),
        quantity: 0,
        revenue: 0,
      };
    }
    itemSummary[key].quantity += quantity;
    itemSummary[key].revenue += lineTotal;

    recipes
      .filter((recipe) => recipeMatchesLine_(recipe, item))
      .forEach((recipe) => {
        const ingredient = String(recipe.ingredient || '');
        const unit = String(recipe.unit || '');
        const usageKey = [ingredient, unit].join('|');
        if (!ingredientUsage[usageKey]) {
          ingredientUsage[usageKey] = {
            ingredient,
            unit,
            quantity: 0,
            sources: {},
          };
        }
        ingredientUsage[usageKey].quantity += quantity * Number(recipe.qty_per_qty || 0);
        ingredientUsage[usageKey].sources[String(recipe.match_value || '')] = true;
      });
  });

  const dailyRows = Object.values(daily)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((row) => [
      row.date,
      row.orders,
      row.paidOrders,
      row.unpaidOrders,
      row.canceledOrders,
      row.subtotal,
      row.addonTotal,
      row.total,
      row.cashTotal,
      row.linePayTotal,
      row.otherTotal,
      row.orders ? Math.round(row.total / row.orders) : 0,
    ]);

  const itemRows = Object.values(itemSummary)
    .sort((a, b) => b.quantity - a.quantity || b.revenue - a.revenue)
    .map((row, index) => [index + 1, row.key, row.lineType, row.itemName, row.size, row.option, row.quantity, row.revenue]);

  const ingredientRows = Object.values(ingredientUsage)
    .sort((a, b) => a.ingredient.localeCompare(b.ingredient, 'zh-Hant'))
    .map((row) => [
      row.ingredient,
      row.unit,
      Math.round(row.quantity * 100) / 100,
      Object.keys(row.sources).join(','),
    ]);

  return { dailyRows, itemRows, ingredientRows };
}

function recipeMatchesLine_(recipe, item) {
  const matchType = normalizeRecipeMatchType_(recipe.match_type);
  const matchValue = String(recipe.match_value || '');
  if (matchType === 'item_id') return String(item.item_id || '') === matchValue;
  if (matchType === 'addon_id') return String(item.item_id || '') === matchValue && normalizeLineType_(item.line_type) === '加點';
  if (matchType === 'option') return String(item.option || '') === matchValue;
  return false;
}

function normalizeRecipeMatchType_(value) {
  const text = String(value || '').trim();
  const aliases = {
    item_id: 'item_id',
    品項編號: 'item_id',
    addon_id: 'addon_id',
    加點編號: 'addon_id',
    option: 'option',
    選項: 'option',
  };
  return aliases[text] || text;
}

function normalizeLineType_(value) {
  const text = String(value || '').trim();
  const aliases = {
    main: '餐點',
    餐點: '餐點',
    addon: '加點',
    加點: '加點',
  };
  return aliases[text] || text;
}

function sendOrderNotifications_(orderId) {
  try {
    const settings = getSettings_();
    const detail = getOrderStatus(orderId).order;
    if (!detail) return;

    const message = buildOrderMessage_(detail);
    if (isEnabled_(settings.notify_email_enabled) && settings.notify_email_to) {
      MailApp.sendEmail(String(settings.notify_email_to), '新訂單 ' + detail.orderId, message);
    }

    if (settings.google_chat_webhook_url) {
      UrlFetchApp.fetch(String(settings.google_chat_webhook_url), {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify({ text: message }),
        muteHttpExceptions: true,
      });
    }

    if (settings.line_channel_access_token && settings.line_to) {
      UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
        method: 'post',
        contentType: 'application/json',
        headers: {
          Authorization: 'Bearer ' + settings.line_channel_access_token,
        },
        payload: JSON.stringify({
          to: String(settings.line_to),
          messages: [{ type: 'text', text: message }],
        }),
        muteHttpExceptions: true,
      });
    }
  } catch (error) {
    console.error('Notification failed: ' + error);
  }
}

function buildOrderMessage_(order) {
  const itemLines = order.items
    .map((item) => {
      const parts = [item.itemName, item.size, item.option].filter(Boolean).join(' ');
      return '- ' + parts + ' x ' + item.quantity + ' = ' + formatMoney_(item.lineTotal);
    })
    .join('\n');

  return [
    '新訂單 ' + order.orderId,
    order.serviceType + (order.tableNo ? ' / 桌號 ' + order.tableNo : ''),
    '付款：' + order.paymentMethod + ' / ' + order.paymentStatus,
    '總計：' + formatMoney_(order.total),
    itemLines,
    order.note ? '備註：' + order.note : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function getSpreadsheet_() {
  const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (id) return SpreadsheetApp.openById(id);

  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;

  throw new Error('找不到試算表。請把此專案綁定到 Google Sheet，或在 Script Properties 設定 SPREADSHEET_ID。');
}

function ensureSheet_(ss, sheetName, headers, seedRows) {
  const sheet = getOrCreateSheet_(ss, sheetName);
  const lastRow = sheet.getLastRow();
  const lastColumn = Math.max(sheet.getLastColumn(), headers.length, 1);
  const normalizedHeaders = headers.map((header) => normalizeHeader_(header));

  if (lastRow === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    if (seedRows.length) sheet.getRange(2, 1, seedRows.length, headers.length).setValues(seedRows);
    return;
  }

  const values = sheet.getRange(1, 1, lastRow, lastColumn).getValues();
  const existingHeaders = values[0].map((value) => String(value || '').trim());
  const normalizedExistingHeaders = existingHeaders.map((header) => normalizeHeader_(header));
  const emptyHeaders = existingHeaders.every((value) => !value);
  const matches =
    headers.length === existingHeaders.length &&
    normalizedHeaders.every((header, index) => normalizedExistingHeaders[index] === header);

  if (emptyHeaders) {
    sheet.clearContents();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    if (seedRows.length) sheet.getRange(2, 1, seedRows.length, headers.length).setValues(seedRows);
    return;
  }

  if (matches) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    return;
  }

  const headerIndex = normalizedExistingHeaders.reduce((map, header, index) => {
    if (header) map[header] = index;
    return map;
  }, {});
  const remappedRows = values
    .slice(1)
    .filter((row) => row.some((cell) => cell !== ''))
    .map((row) => normalizedHeaders.map((header) => (headerIndex[header] === undefined ? '' : row[headerIndex[header]])));

  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (remappedRows.length) sheet.getRange(2, 1, remappedRows.length, headers.length).setValues(remappedRows);
  if (!remappedRows.length && seedRows.length) sheet.getRange(2, 1, seedRows.length, headers.length).setValues(seedRows);
}

function getOrCreateSheet_(ss, sheetName) {
  const existing = ss.getSheetByName(sheetName);
  if (existing) return existing;

  const legacyName = LEGACY_SHEET_NAMES[sheetName];
  const legacy = legacyName ? ss.getSheetByName(legacyName) : null;
  if (legacy) {
    legacy.setName(sheetName);
    return legacy;
  }

  return ss.insertSheet(sheetName);
}

function ensureSettingRows_() {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.SETTINGS);
  const rows = readTable_(SHEETS.SETTINGS);
  const existing = rows.reduce((set, row) => {
    if (row.key) set[normalizeSettingKey_(row.key)] = true;
    return set;
  }, {});
  const missing = SEED_SETTINGS.filter((row) => !existing[normalizeSettingKey_(row[0])]);
  if (missing.length) sheet.getRange(sheet.getLastRow() + 1, 1, missing.length, HEADERS[SHEETS.SETTINGS].length).setValues(missing);
}

function normalizeSettingLabels_() {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.SETTINGS);
  if (!sheet || sheet.getLastRow() < 2) return;

  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1);
  const values = range.getValues();
  let changed = false;
  const nextValues = values.map((row) => {
    const internalKey = normalizeSettingKey_(row[0]);
    const display = SETTING_DISPLAY_LABELS[internalKey] || row[0];
    if (display !== row[0]) changed = true;
    return [display];
  });
  if (changed) range.setValues(nextValues);
}

function ensureDefaultStoreTitle_() {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.SETTINGS);
  if (!sheet || sheet.getLastRow() < 2) return;

  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2);
  const values = range.getValues();
  let changed = false;
  const nextValues = values.map((row) => {
    if (normalizeSettingKey_(row[0]) === 'store_name') {
      const current = String(row[1] || '').trim();
      if (!current || current === '線上點菜單') {
        changed = true;
        return [row[0], '線上點餐系統'];
      }
    }
    return row;
  });
  if (changed) range.setValues(nextValues);
}

function migrateMenuDataVersion_() {
  const settings = getSettings_();
  if (String(settings.menu_version || '') === MENU_DATA_VERSION) return;

  writeTable_(SHEETS.MENU, HEADERS[SHEETS.MENU], SEED_MENU);
  writeTable_(SHEETS.ADDONS, HEADERS[SHEETS.ADDONS], SEED_ADDONS);
  writeTable_(SHEETS.RECIPES, HEADERS[SHEETS.RECIPES], SEED_RECIPES);
  setSettingValue_('菜單版本', MENU_DATA_VERSION);
}

function setSettingValue_(label, value) {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.SETTINGS);
  const key = normalizeSettingKey_(label);
  const lastRow = sheet.getLastRow();

  if (lastRow >= 2) {
    const range = sheet.getRange(2, 1, lastRow - 1, 2);
    const values = range.getValues();
    const rowIndex = values.findIndex((row) => normalizeSettingKey_(row[0]) === key);
    if (rowIndex >= 0) {
      sheet.getRange(rowIndex + 2, 2).setValue(value);
      return;
    }
  }

  sheet.appendRow([label, value]);
}

function normalizeRecipeMatchLabels_() {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.RECIPES);
  if (!sheet || sheet.getLastRow() < 2) return;

  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1);
  const values = range.getValues();
  let changed = false;
  const nextValues = values.map((row) => {
    const matchType = normalizeRecipeMatchType_(row[0]);
    const display = RECIPE_MATCH_DISPLAY_LABELS[matchType] || row[0];
    if (display !== row[0]) changed = true;
    return [display];
  });
  if (changed) range.setValues(nextValues);
}

function normalizeOrderItemLineTypes_() {
  const sheet = getSpreadsheet_().getSheetByName(SHEETS.ORDER_ITEMS);
  if (!sheet || sheet.getLastRow() < 2) return;

  const range = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1);
  const values = range.getValues();
  let changed = false;
  const nextValues = values.map((row) => {
    const lineType = normalizeLineType_(row[0]);
    if (lineType !== row[0]) changed = true;
    return [lineType];
  });
  if (changed) range.setValues(nextValues);
}

function formatSheets_(ss) {
  Object.values(SHEETS).forEach((name) => {
    const sheet = ss.getSheetByName(name);
    if (!sheet) return;
    const lastColumn = Math.max(sheet.getLastColumn(), HEADERS[name].length);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, lastColumn).setFontWeight('bold').setBackground('#f7efe5');
    sheet.autoResizeColumns(1, lastColumn);
  });

  const orderSheet = ss.getSheetByName(SHEETS.ORDERS);
  if (orderSheet) {
    orderSheet.getRange('B:B').setNumberFormat('yyyy/mm/dd hh:mm:ss');
    orderSheet.getRange('H:J').setNumberFormat('"NT$"#,##0');
    orderSheet.getRange('N:N').setNumberFormat('yyyy/mm/dd hh:mm:ss');
    applyOrderValidations_(orderSheet);
  }

  const itemSheet = ss.getSheetByName(SHEETS.ORDER_ITEMS);
  if (itemSheet) {
    itemSheet.getRange('G:G').setNumberFormat('"NT$"#,##0');
    itemSheet.getRange('H:H').setNumberFormat('#,##0');
    itemSheet.getRange('I:I').setNumberFormat('"NT$"#,##0');
  }

  const dailySheet = ss.getSheetByName(SHEETS.DAILY_SUMMARY);
  if (dailySheet) {
    dailySheet.getRange('F:L').setNumberFormat('"NT$"#,##0');
  }

  const itemSummarySheet = ss.getSheetByName(SHEETS.ITEM_SUMMARY);
  if (itemSummarySheet) {
    itemSummarySheet.getRange('H:H').setNumberFormat('"NT$"#,##0');
  }
}

function applyOrderValidations_(sheet) {
  const settings = getSettings_();
  const rowCount = Math.max(sheet.getMaxRows() - 1, 1);
  setListValidation_(sheet.getRange(2, 11, rowCount, 1), splitOptions_(settings.payment_methods));
  setListValidation_(sheet.getRange(2, 12, rowCount, 1), splitOptions_(settings.payment_statuses));
  setListValidation_(sheet.getRange(2, 13, rowCount, 1), splitOptions_(settings.order_statuses));
}

function setListValidation_(range, values) {
  if (!values.length) return;
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(values, true).setAllowInvalid(false).build();
  range.setDataValidation(rule);
}

function readTable_(sheetName) {
  const sheet = getSpreadsheet_().getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];

  const values = sheet.getDataRange().getValues();
  const headers = values.shift().map((header) => normalizeHeader_(header));
  return values
    .filter((row) => row.some((cell) => cell !== ''))
    .map((row) =>
      headers.reduce((record, header, index) => {
        record[header] = row[index];
        return record;
      }, {})
    );
}

function writeTable_(sheetName, headers, rows) {
  const sheet = getSpreadsheet_().getSheetByName(sheetName);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (rows.length) sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}

function getSettings_() {
  return readTable_(SHEETS.SETTINGS).reduce((settings, row) => {
    if (row.key) settings[normalizeSettingKey_(row.key)] = row.value;
    return settings;
  }, {});
}

function getSetting_(key) {
  return getSettings_()[key];
}

function getPublicSettings_(settings) {
  return {
    store_name: settings.store_name || '線上點餐系統',
    currency: settings.currency || 'NT$',
    paymentMethods: splitOptions_(settings.payment_methods),
    paymentStatuses: splitOptions_(settings.payment_statuses),
    orderStatuses: splitOptions_(settings.order_statuses),
    webAppUrl: getWebAppUrl_(),
  };
}

function requireAdmin_(pin) {
  const expected = String(getSetting_('admin_pin') || '').trim();
  if (expected && String(pin || '').trim() !== expected) {
    throw new Error('管理 PIN 錯誤');
  }
}

function buildMap_(rows, key) {
  return rows.reduce((map, row) => {
    map[String(row[key])] = row;
    return map;
  }, {});
}

function normalizeHeader_(header) {
  const text = String(header || '').trim();
  return HEADER_ALIASES[text] || text;
}

function normalizeSettingKey_(key) {
  const text = String(key || '').trim();
  return SETTING_KEY_ALIASES[text] || text;
}

function splitOptions_(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeListValue_(value, allowed, fallback) {
  const text = String(value || '').trim() || fallback;
  if (!allowed.length) return text;
  if (!allowed.includes(text)) throw new Error('不支援的選項：' + text);
  return text;
}

function normalizeQuantity_(value) {
  const quantity = Number(value);
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    throw new Error('數量必須介於 1 到 99');
  }
  return quantity;
}

function isEnabled_(value) {
  if (value === true) return true;
  const text = String(value || '').trim().toLowerCase();
  return ['true', 'yes', 'y', '1', '啟用'].includes(text);
}

function makeOrderId_() {
  const timestamp = Utilities.formatDate(new Date(), getTimeZone_(), 'yyyyMMdd-HHmmss');
  const suffix = Utilities.getUuid().slice(0, 6).toUpperCase();
  return timestamp + '-' + suffix;
}

function makePickupCode_() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function buildStatusUrl_(orderId) {
  const base = getWebAppUrl_();
  return base ? base + '?page=status&order=' + encodeURIComponent(orderId) : '';
}

function getWebAppUrl_() {
  try {
    return ScriptApp.getService().getUrl() || WEB_APP_URL_FALLBACK;
  } catch (error) {
    return WEB_APP_URL_FALLBACK;
  }
}

function formatMoney_(value) {
  const currency = getSetting_('currency') || 'NT$';
  return currency + Number(value || 0).toLocaleString('zh-TW');
}

function formatDate_(date) {
  return Utilities.formatDate(date, getTimeZone_(), 'yyyy/MM/dd HH:mm:ss');
}

function formatDateValue_(value, pattern) {
  if (!value) return '';
  const format = pattern || 'yyyy/MM/dd HH:mm:ss';
  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
    return Utilities.formatDate(value, getTimeZone_(), format);
  }
  return String(value);
}

function getTimeZone_() {
  return Session.getScriptTimeZone() || 'Asia/Taipei';
}
