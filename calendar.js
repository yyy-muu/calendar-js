const commander = require("commander");

// コマンドライン引数(対象月の整数値)を取得
commander.option("-m").parse(process.argv);

let month = commander.args[0];

const today = new Date();

function calender(month) {
  const weekDays = "日 月 火 水 木 金 土";
  const year = today.getFullYear();
  const firstDay = new Date(year, month - 1, 1);
  const firstDate = firstDay.getDate();
  const lastDate = new Date(year, month, 0).getDate();
  let weekDayFirstDate = firstDay.getDay(); // 月初日の曜日を整数で取得
  let dateCounter = weekDayFirstDate; // 月初日の曜日の整数値を、日付出力のループ処理の初期値とする

  console.log("     " + month + "月" + " " + year + "    ");
  console.log(weekDays);
  process.stdout.write("   ".repeat(weekDayFirstDate)); // 月初日の曜日の整数値に応じて空白を出力

  // 1日〜月末日までを出力
  for (let i = 1; i < lastDate + 1; i++) {
    process.stdout.write(i.toString().padStart(2) + " "); // 月初日の曜日(整数値)に1ずつ加算
    dateCounter++;
    if (dateCounter % 7 === 0) console.log(""); // 土曜日(7の倍数)に達したら改行
  }
  console.log("");
}

// コマンドライン引数未指定の場合
if (month === undefined) {
  month = today.getMonth();
  calender(month + 1); //今月のカレンダーを表示
  // 1~12月のいづれかを指定の場合
} else if (month >= 1 && month <= 12) {
  calender(month);
} else {
  console.log(`${month} is neither a month number 1..12 nor a name`);
}
