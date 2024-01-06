import {
  formatDate,
  formatDateTime,
  formatTimeAgo,
  calculateAge,
  formatBirthDate,
} from "./date";

describe("Date utility functions", () => {
  test("formatDate formats date correctly", () => {
    expect(formatDate("2022-01-01")).toBe("2022-01-01");
    expect(formatDate("")).toBe("");
  });

  test("formatDateTime formats date and time correctly", () => {
    const date = new Date(Date.UTC(2022, 0, 1, 3, 0)); // 12:00 JST is 03:00 UTC
    expect(formatDateTime(date.toISOString())).toBe("2022/01/01 12:00");
    expect(formatDateTime("")).toBe("");
  });

  test("formatTimeAgo formats time ago correctly", () => {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    expect(formatTimeAgo(oneHourAgo.toISOString())).toBe("1時間前");
    expect(formatTimeAgo("")).toBe("");
  });

  test("calculateAge calculates age correctly", () => {
    const now = new Date();
    const twentyYearsAgo = new Date(
      now.getFullYear() - 20,
      now.getMonth(),
      now.getDate()
    );
    expect(calculateAge(twentyYearsAgo.toISOString())).toBe(20);
    expect(calculateAge("")).toBe(0);
  });

  test("formatBirthDate formats birth date correctly", () => {
    expect(formatBirthDate("2002-02-02")).toBe("2002年2月2日");
    expect(formatBirthDate("")).toBe("");
  });
});
