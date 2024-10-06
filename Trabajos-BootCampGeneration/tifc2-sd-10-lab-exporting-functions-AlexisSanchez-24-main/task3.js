export function ageCalculator(year, month, day) {
  const today = new Date();
  let age = today.getFullYear() - year;

  const hasBirthdayPassed = today.getMonth() > (month - 1) || 
                            (today.getMonth() === (month - 1) && today.getDate() >= day);

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}
