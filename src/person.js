// فقط یک چیز میتواند دیفالت اکسپورت شود
// موردی که اکسپورت دیفالت شده باشد در ایمپورت کردنش خارج از {} باید ایمپورت شود ولی اکسپورت عادی داخل {} آن
export default function walk() {
  console.log("walking...");
}

export function talk() {
  console.log("talking...");
}
