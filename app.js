const age = parseInt(prompt("몇살인가요?"));

if (isNaN(age) || age < 0) {
  console.log("숫자 혹은 양의 정수가 아닙니다.");
} else if (age < 18) {
  console.log("18살 미만입니다.");
} else if (age >= 18 && age <= 50) {
  console.log("18살 이상 50살 이하입니다.");
} else if (age > 50 || age <= 80) {
  console.log("50살 초과 80살 이하입니다.");
} else if (age === 100) {
  console.log("100살 입니다.");
} else if (age > 80) {
  console.log("80초과 입니다.");
}
