document.querySelectorAll(".tab-item").forEach((item) => {
  item.addEventListener("click", function () {
    // 1. すべての要素から一旦 'active' クラスを削除
    document.querySelectorAll(".tab-item").forEach((tab) => {
      tab.classList.remove("active");
    });

    // 2. クリックされた要素にだけ 'active' クラスを追加
    this.classList.add("active");
  });
});

document.querySelectorAll(".dot").forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const targetIndex = e.target.getAttribute("data-target");

    // ここで該当するスタイリングの要素を取得（例：クラス名が .styling-item の場合）
    const targetElement =
      document.querySelectorAll(".styling-item")[targetIndex];

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
