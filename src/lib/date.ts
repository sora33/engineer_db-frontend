export function formatDate(dateString: string) {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0 based, so +1 and pad with 0
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}

export const formatDateTime = (dateString: string): string => {
  if (!dateString) {
    return "";
  }
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
};

export const formatTimeAgo = (dateString: string): string => {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)}秒前`;
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)}分前`;
  }
  if (secondsPast <= 86400) {
    return `${Math.round(secondsPast / 3600)}時間前`;
  }
  if (secondsPast > 86400) {
    const day = Math.round(secondsPast / 86400);
    if (day < 30) {
      return `${day}日前`;
    }
  }
  return "30日以上前";
};

export const calculateAge = (birthDateString: string): number => {
  if (!birthDateString) {
    return 0;
  }
  const birthDate = new Date(birthDateString);
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  const m = now.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const formatBirthDate = (birthDateString: string): string => {
  if (!birthDateString) {
    return "";
  }
  const birthDate = new Date(birthDateString);
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const date = birthDate.getDate();
  return `${year}年${month}月${date}日`;
};
