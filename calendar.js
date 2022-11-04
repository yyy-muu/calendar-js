const commander = require("commander");

// コマンドライン引数(対象月の整数値)を取得
commander.option("-m").parse(process.argv);

let month = commander.args[0];

const today = new Date();

const calender = (month) => {
  const weekDays = "日 月 火 水 木 金 土";
  const year = today.getFullYear();
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  let startDayOfMonth = startDate.getDay(); // 月初日の曜日を整数で取得

  console.log(`     ${month}月 ${year}年`);
  console.log(weekDays);
  process.stdout.write("   ".repeat(startDayOfMonth)); // 月初日の曜日の整数値に応じて空白を出力

  // 1日〜月末日までを出力
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1) // 1日ずつ増し上げ
  ) {
    process.stdout.write(date.getDate().toString().padStart(2) + " ");
    if (date.getDay() === 6) console.log(""); // 土曜日に達したら改行
  }
  console.log("");
};

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
