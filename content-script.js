var IRCCloud_zh_TW = function() {
  var conversionTable = {
    /* top navigation bar */
    "#settings > a": "設定",
    "#shortcuts > a": "快捷鍵列表",
    "#logout > span > a": "登出",

    /* right-hand side navigations */
    "#addNetwork > a": "增加伺服器連線",

    /* topic bar navigations */
    ".leave > span": "離開聊天室",
    // ".options > span": "設定",
    ".actions .topic": "設定標題",
    ".actions .showMembers": "顯示使用者列表",
    ".actions .trackUnread": "提示未讀訊息",
    ".actions .showJoinPart": "顯示使用者進出狀況",
    ".actions .inlineImages": "顯示嵌入圖片",
    ".actions .ignores": "查詢忽略名單",

    /* settings panel */
    "#settingsContainer > h2:nth-of-type(1)": "帳號設定",
    "label[for=settingsEmail]": "電子信箱",
    "label[for=settingsName]": "姓名",
    "label[for=settingsHighlights]": "Highlight words",
    "label[for=settingsAutoaway]": "自動暫離",
    "input#settingsAutoaway + small": "離開本頁時，自動將您的狀為「away」。",
    "#settingsContainer > h2:nth-of-type(2)": "顯示偏好",
    "label[for=prefsTime24hr]": "24 小時制時間",
    "label[for=prefsTimeSeconds]": "顯示秒數",
    "label[for=prefsShowModeSymbol]": "顯示使用者權限（如 @、+ 等）",
    "label[for=prefsAlertSounds]": "在背景被呼叫時播放提示音",
    "a#testAlertSound": "測試",
    "#settingsContainer > h2:nth-of-type(3)": "變更密碼",
    "label[for=settingsOldPassword]": "目前密碼",
    "label[for=settingsNewPassword]": "新的密碼",
  };

  $.each(conversionTable, function(selector, localizedString) {
    $(selector).text(localizedString);
  });
};

var main = function() {
  IRCCloud_zh_TW();
};
main();
