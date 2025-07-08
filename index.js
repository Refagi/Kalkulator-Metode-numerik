$(document).ready(function () {
  function tittleSectionOne() {
    new TypeIt("#tittle-sectionTwo", {
      speed: 150,
      cursor: true,
      waitUntilVisible: true,
      afterComplete: async (instance) => {
        await new Promise((r) => setTimeout(r, 500));
        instance.destroy();
        $("#tittle-sectionTwo").empty();
        tittleSectionOne();
      },
    })
      .type("Selamat Dalang")
      .move(-3, { delay: 1000 })
      .delete(1)
      .type("t")
      .move(3)
      .type(" di Kalkulator Interpolasi, Integrasi Numerik, dan Persamaan Differensial")
      .pause(2000)
      .go();
  }

  const cards = $(".card");
  let index = 0;
  function updateCards() {
    cards.removeClass("left right active");
    const prev = (index - 1 + cards.length) % cards.length;
    const next = (index + 1) % cards.length;
    $(cards[prev]).addClass("left");
    $(cards[index]).addClass("active");
    $(cards[next]).addClass("right");
  }

  $(".nav.left").click(() => {
    index = (index - 1 + cards.length) % cards.length;
    updateCards();
  });

  $(".nav.right").click(() => {
    index = (index + 1) % cards.length;
    updateCards();
  });

  setInterval(() => {
    index = (index + 1) % cards.length;
    updateCards();
  }, 2000);

  function moveUnderlineOne() {
    const tabs = $(".calc-tab");
    tabs.on("click", function () {
      tabs.removeClass("active");
      $(this).addClass("active");
    });
  }
  function moveUnderlineTwo() {
    const tabs = $(".calc-tab-four");
    tabs.on("click", function () {
      tabs.removeClass("active");
      $(this).addClass("active");
    });
  }

  function moveUnderlineThree() {
    const tabs = $(".calc-tab-five");
    tabs.on("click", function () {
      tabs.removeClass("active");
      $(this).addClass("active");
    });
  }

  function resetInput() {
    $(
      "#x2, #x3, #x4, #Fx2, #Fx3, #Fx4, #b0, #b1, #b2, #b3, #c1, #c2, #d1, #l0, #l1, #l2, #l3"
    )
      .parent()
      .remove();
  }

  function countInterpolasiLinear() {
    const x = parseFloat($("#x-target").val());
    const x0 = parseFloat($("#x0").val());
    const x1 = parseFloat($("#x1").val());
    const fx0 = parseFloat($("#Fx0").val());
    const fx1 = parseFloat($("#Fx1").val());
    if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(fx0) || isNaN(fx1)) {
      alert("Input Tidak Boleh Kosong Bro!");
      return;
    }
    const result = fx0 + ((fx1 - fx0) / (x1 - x0)) * (x - x0);
    $("#result").val(result.toFixed(4));
  }

  function toggleInterpolasiKuadratik() {
    resetInput();
    $("#x1")
      .parent()
      .after(
        `<div class="form-group"><label for="x2">X₂:</label><input type="number" id="x2" value="0"></div>`
      );
    $("#Fx1")
      .parent()
      .after(
        `<div class="form-group"><label for="Fx2">F(x₂):</label><input type="number" id="Fx2" value="0"></div>`
      );
    $("#result")
      .parent()
      .after(
        `<div class="output-result"><label for="b0">b₀:</label><input type="number" id="b0" value="0"></div>`
      );
    $("#b0")
      .parent()
      .after(
        `<div class="output-result"><label for="b1">b₁:</label><input type="number" id="b1" value="0"></div>`
      );
    $("#b1")
      .parent()
      .after(
        `<div class="output-result"><label for="b2">b₂:</label><input type="number" id="b2" value="0"></div>`
      );
  }

  function countInterpolasiKuadratik() {
    const x = parseFloat($("#x-target").val());
    const x0 = parseFloat($("#x0").val());
    const x1 = parseFloat($("#x1").val());
    const x2 = parseFloat($("#x2").val());
    const fx0 = parseFloat($("#Fx0").val());
    const fx1 = parseFloat($("#Fx1").val());
    const fx2 = parseFloat($("#Fx2").val());
    if (
      isNaN(x) ||
      isNaN(x0) ||
      isNaN(x1) ||
      isNaN(x2) ||
      isNaN(fx0) ||
      isNaN(fx1) ||
      isNaN(fx2)
    ) {
      alert("Input Tidak Boleh Kosong Bro!");
      return;
    }
    const b0 = fx0;
    $("#b0").val(b0.toFixed(4));
    const b1 = (fx1 - fx0) / (x1 - x0);
    $("#b1").val(b1.toFixed(4));
    const b2 = ((fx2 - fx1) / (x2 - x1) - b1) / (x2 - x0);
    $("#b2").val(b2.toFixed(4));
    const result = b0 + b1 * (x - x0) + b2 * (x - x0) * (x - x1);
    $("#result").val(result.toFixed(4));
  }

  function toggleInterpolasiBagiNewton() {
    resetInput();
    $("#x1")
      .parent()
      .after(
        `<div class="form-group"><label for="x2">X₂:</label><input type="number" id="x2" value="0"></div>`
      );
    $("#Fx1")
      .parent()
      .after(
        `<div class="form-group"><label for="Fx2">F(x₂):</label><input type="number" id="Fx2" value="0"></div>`
      );
    $("#x2")
      .parent()
      .after(
        `<div class="form-group"><label for="x3">X₃:</label><input type="number" id="x3" value="0"></div>`
      );
    $("#Fx2")
      .parent()
      .after(
        `<div class="form-group"><label for="Fx3">F(X₃):</label><input type="number" id="Fx3" value="0"></div>`
      );

    $("#result")
      .parent()
      .after(
        `<div class="output-result"><label for="b0">b₀:</label><input type="number" id="b0" value="0"></div>`
      );
    $("#b0")
      .parent()
      .after(
        `<div class="output-result"><label for="b1">b₁:</label><input type="number" id="b1" value="0"></div>`
      );
    $("#b1")
      .parent()
      .after(
        `<div class="output-result"><label for="c1">c₁:</label><input type="number" id="c1" value="0"></div>`
      );
    $("#c1")
      .parent()
      .after(
        `<div class="output-result"><label for="d1">d₁:</label><input type="number" id="d1" value="0"></div>`
      );
    $("#d1")
      .parent()
      .after(
        `<div class="output-result"><label for="b2">b₂:</label><input type="number" id="b2" value="0"></div>`
      );
    $("#b2")
      .parent()
      .after(
        `<div class="output-result"><label for="c2">c₂:</label><input type="number" id="c2" value="0"></div>`
      );
    $("#c2")
      .parent()
      .after(
        `<div class="output-result"><label for="b3">b₃:</label><input type="number" id="b3" value="0"></div>`
      );
  }

  function countInterpolasiBagiNewton() {
    const x = parseFloat($("#x-target").val());
    const x0 = parseFloat($("#x0").val());
    const x1 = parseFloat($("#x1").val());
    const x2 = parseFloat($("#x2").val());
    const x3 = parseFloat($("#x3").val());
    const fx0 = parseFloat($("#Fx0").val());
    const fx1 = parseFloat($("#Fx1").val());
    const fx2 = parseFloat($("#Fx2").val());
    const fx3 = parseFloat($("#Fx3").val());
    if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(fx0) || isNaN(fx1) || isNaN(fx2) || isNaN(fx3)) {
      alert("Input Tidak Boleh Kosong Bro!");
      return;}
    const b0 = fx0;
    $("#b0").val(b0.toFixed(4));
    const b1 = (fx1 - fx0) / (x1 - x0);
    $("#b1").val(b1.toFixed(4));
    const c1 = (fx2 - fx1) / (x2 - x1);
    $("#c1").val(c1.toFixed(4));
    const d1 = (fx3 - fx2) / (x3 - x2);
    $("#d1").val(d1.toFixed(4));
    const b2 = (c1 - b1) / (x2 - x0);
    $("#b2").val(b2.toFixed(4));
    const c2 = (d1 - c1) / (x3 - x1);
    $("#c2").val(c2.toFixed(4));
    const b3 = Math.abs((c2 - b2) / (x3 - x0));
    $("#b3").val(b3.toFixed(4));
    const result =
      b0 +
      b1 * (x - x0) +
      b2 * (x - x0) * (x - x1) +
      b3 * (x - x0) * (x - x1) * (x - x2);
    $("#result").val(result.toFixed(4));
  }

  function toggleInterpolasiPolinomialLangrangeOne() {
    resetInput();
    $("#result")
      .parent()
      .after(
        `<div class="output-result"><label for="l0">L₀:</label><input type="number" id="l0" value="0"></div>`
      );
    $("#l0")
      .parent()
      .after(
        `<div class="output-result"><label for="l1">L₁:</label><input type="number" id="l1" value="0"></div>`
      );
  }

  function toggleInterpolasiPolinomialLangrangeTwo() {
    resetInput();
    $("#x1")
      .parent()
      .after(
        `<div class="form-group"><label for="x2">X₂:</label><input type="number" id="x2" value="0"></div>`
    );
    $("#Fx1")
      .parent()
      .after(
        `<div class="form-group"><label for="Fx2">F(x₂):</label><input type="number" id="Fx2" value="0"></div>`
    );
    $("#result")
      .parent()
      .after(
        `<div class="output-result"><label for="l0">L₀:</label><input type="number" id="l0" value="0"></div>`
      );
    $("#l0")
      .parent()
      .after(
        `<div class="output-result"><label for="l1">L₁:</label><input type="number" id="l1" value="0"></div>`
      );
    $("#l1")
      .parent()
      .after(
        `<div class="output-result"><label for="l2">L₂:</label><input type="number" id="l2" value="0"></div>`
      );
  }

  function toggleInterpolasiPolinomialLangrangeThree() {
    resetInput();
    $("#x1")
      .parent()
      .after(
        `<div class="form-group"><label for="x2">X₂:</label><input type="number" id="x2" value="0"></div>`
    );
    $("#x2")
      .parent()
      .after(
        `<div class="form-group"><label for="x3">X₃:</label><input type="number" id="x3" value="0"></div>`
    );
    $("#Fx1")
      .parent()
      .after(
        `<div class="form-group"><label for="Fx2">F(x₂):</label><input type="number" id="Fx2" value="0"></div>`
    );
    $("#Fx2")
      .parent()
      .after(
        `<div class="form-group"><label for="Fx3">F(X₃):</label><input type="number" id="Fx3" value="0"></div>`
    );
    $("#result")
      .parent()
      .after(
        `<div class="output-result"><label for="l0">L₀:</label><input type="number" id="l0" value="0"></div>`
      );
    $("#l0")
      .parent()
      .after(
        `<div class="output-result"><label for="l1">L₁:</label><input type="number" id="l1" value="0"></div>`
      );
    $("#l1")
      .parent()
      .after(
        `<div class="output-result"><label for="l2">L₂:</label><input type="number" id="l2" value="0"></div>`
      );
    $("#l2")
      .parent()
      .after(
        `<div class="output-result"><label for="l3">L₃:</label><input type="number" id="l3" value="0"></div>`
      );
  }

  function countInterpolasiLagrangeOrdeOne() {
    toggleInterpolasiPolinomialLangrangeOne();
    const x = parseFloat($("#x-target").val());
    const x0 = parseFloat($("#x0").val());
    const x1 = parseFloat($("#x1").val());
    const fx0 = parseFloat($("#Fx0").val());
    const fx1 = parseFloat($("#Fx1").val());
    if (isNaN(x) || isNaN(x0) || isNaN(x1) || isNaN(fx0) || isNaN(fx1)) {
      alert("Input Tidak Boleh Kosong Bro!");
      return;
    }
    const l0 = parseFloat((x - x1) / (x0 - x1));
    $("#l0").val(l0.toFixed(4));
    const l1 = parseFloat((x - x0) / (x1 - x0));
    $("#l1").val(l1.toFixed(4));
    const result = l0 * fx0 + l1 * fx1;
    $("#result").val(result.toFixed(4));
  }

  function countInterpolasiLagrangeOrdeTwo() {
    const x = parseFloat($("#x-target").val());
    const x0 = parseFloat($("#x0").val());
    const x1 = parseFloat($("#x1").val());
    const x2 = parseFloat($("#x2").val());
    const fx0 = parseFloat($("#Fx0").val());
    const fx1 = parseFloat($("#Fx1").val());
    const fx2 = parseFloat($("#Fx2").val());
    if (
      isNaN(x) ||
      isNaN(x0) ||
      isNaN(x1) ||
      isNaN(x2) ||
      isNaN(fx0) ||
      isNaN(fx1) ||
      isNaN(fx2)
    ) {
      alert("Input Tidak Boleh Kosong Bro!");
      return;
    }
    const l0 = parseFloat(((x - x1) / (x0 - x1)) * ((x - x2) / (x0 - x2)));
    $("#l0").val(l0.toFixed(4));
    const l1 = parseFloat(((x - x0) / (x1 - x0)) * ((x - x2) / (x1 - x2)));
    $("#l1").val(l1.toFixed(4));
    const l2 = parseFloat(((x - x0) / (x2 - x0)) * ((x - x1) / (x2 - x1)));
    $("#l2").val(l2.toFixed(4));
    const result = parseFloat(l0 * fx0 + l1 * fx1 + l2 * fx2);
    $("#result").val(result.toFixed(4));
  }

  function countInterpolasiLagrangeOrdeThree() {
    const x = parseFloat($("#x-target").val());
    const x0 = parseFloat($("#x0").val());
    const x1 = parseFloat($("#x1").val());
    const x2 = parseFloat($("#x2").val());
    const x3 = parseFloat($("#x3").val());
    const fx0 = parseFloat($("#Fx0").val());
    const fx1 = parseFloat($("#Fx1").val());
    const fx2 = parseFloat($("#Fx2").val());
    const fx3 = parseFloat($("#Fx3").val());
    if (
      isNaN(x) ||
      isNaN(x0) ||
      isNaN(x1) ||
      isNaN(x2) ||
      isNaN(x3) ||
      isNaN(fx0) ||
      isNaN(fx1) ||
      isNaN(fx2) ||
      isNaN(fx3)
    ) {
      alert("Input Tidak Boleh Kosong Bro!");
      return;
    }
    const l0 = parseFloat(
      ((x - x1) / (x0 - x1)) * ((x - x2) / (x0 - x2)) * ((x - x3) / (x0 - x3))
    );
    $("#l0").val(l0.toFixed(4));
    const l1 = parseFloat(
      ((x - x0) / (x1 - x0)) * ((x - x2) / (x1 - x2)) * ((x - x3) / (x1 - x3))
    );
    $("#l1").val(l1.toFixed(4));
    const l2 = parseFloat(
      ((x - x0) / (x2 - x0)) * ((x - x1) / (x2 - x1)) * ((x - x3) / (x2 - x3))
    );
    $("#l2").val(l2.toFixed(4));
    const l3 = parseFloat(
      ((x - x0) / (x3 - x0)) * ((x - x1) / (x3 - x1)) * ((x - x2) / (x3 - x2))
    );
    $("#l3").val(l3.toFixed(4));
    const result = parseFloat(l0 * fx0 + l1 * fx1 + l2 * fx2 + l3 * fx3);
    $("#result").val(result.toFixed(4));
  }

  function getIntegrasiNumerik() {
    let a = parseFloat($("#a").val());
    let b = parseFloat($("#b").val());
    let n = parseInt($("#n").val());
    let h = parseFloat($("#h").val());
    let fx = $("#fx").val();
    let eksak = $("#eksak").val();

    return { a, b, n, h, fx, eksak };
  }

  function countTrapezium() {
    let { a, b, n, h, fx, eksak } = getIntegrasiNumerik();

    if (!n && h && fx) {
      n = Math.round((b - a) / h);
    } else if (!h && n && fx) {
      h = (b - a) / n;
    }

    if (n > 0) {
      $("#n").val(n);
      $("#h").val(h);
      const container = $("#dynamic-xi-fi");
      container.empty();

      const exprFx = math.parse(fx);
      const compileFx = exprFx.compile();

      let xiAccomod = [];
      let fiAccomod = [];

      for (let i = 0; i <= n; i++) {
        let xi = a + i * h;
        let fi = compileFx.evaluate({ x: xi });

        xiAccomod.push(xi);
        fiAccomod.push(fi);
      }

      let count = fiAccomod[0] + fiAccomod[n];
      for (let i = 1; i < n; i++) {
        count += 2 * fiAccomod[i];
      }
      let result = (h / 2) * count;

      for (let i = 0; i <= n; i++) {
        const xi = `
        <div class="form-group">
          <label for="x${i}-trapezium">x${i}:</label>
          <input type="number" id="x${i}-trapezium" value="${xiAccomod[
          i
        ].toFixed(4)}" readonly />
        </div>`;
        const fi = `
        <div class="form-group">
          <label for="f${i}-trapezium">f${i}:</label>
          <input type="number" id="f${i}-trapezium" value="${fiAccomod[
          i
        ].toFixed(4)}" readonly />
        </div>`;
        container.append(xi);
        container.append(fi);
      }
      const I = `
      <div class="form-group">
        <label for="I-trapezium">I:</label>
        <input type="number" id="I-trapezium" value="${result.toFixed(
          4
        )}" readonly />
      </div>`;
      container.append(I);
      if (eksak) {
        let countEksak = Math.abs((eksak - result.toFixed(4)) / eksak);
        let resultGalat = countEksak * 100;
        const galatRelatif = `
      <div class="form-group">
        <label for="galat-trapezium">galat-relatif(%):</label>
        <input type="number" id="galat-trapezium" value="${resultGalat.toFixed(
          4
        )}" readonly />
      </div>`;
        container.append(galatRelatif);
      }
    }
  }

  function countSimpsonSepertiga() {
    let { a, b, n, h, fx, eksak } = getIntegrasiNumerik();

    if (!n && h && fx) {
      n = Math.round((b - a) / h);
    } else if (!h && n && fx) {
      h = (b - a) / n;
    }

    if (n > 0) {
      $("#n").val(n);
      $("#h").val(h);
      const container = $("#dynamic-xi-fi");
      container.empty();

      const exprFx = math.parse(fx);
      const compileFx = exprFx.compile();

      let xiAccomod = [];
      let fiAccomod = [];

      for (let i = 0; i <= n; i++) {
        let xi = a + i * h;
        let fi = compileFx.evaluate({ x: xi });

        xiAccomod.push(xi);
        fiAccomod.push(fi);
      }

      let count = fiAccomod[0] + fiAccomod[n];
      for (let i = 1; i < n; i++) {
        if (i % 2 === 0) {
          count += 2 * fiAccomod[i];
        } else {
          count += 4 * fiAccomod[i];
        }
      }
      let result = (h / 3) * count;

      for (let i = 0; i <= n; i++) {
        const xi = `
        <div class="form-group">
          <label for="x${i}-sepertiga">x${i}:</label>
          <input type="number" id="x${i}-sepertiga" value="${xiAccomod[
          i
        ].toFixed(4)}" readonly />
        </div>`;
        const fi = `
        <div class="form-group">
          <label for="f${i}-sepertiga">f${i}:</label>
          <input type="number" id="f${i}-sepertiga" value="${fiAccomod[
          i
        ].toFixed(4)}" readonly />
        </div>`;
        container.append(xi);
        container.append(fi);
      }
      const I = `
      <div class="form-group">
        <label for="I-sepertiga">I:</label>
        <input type="number" id="I-sepertiga" value="${result.toFixed(
          4
        )}" readonly />
      </div>`;
      container.append(I);
      if (eksak) {
        let countEksak = Math.abs((eksak - result.toFixed(4)) / eksak);
        let resultGalat = countEksak * 100;
        const galatRelatif = `
      <div class="form-group">
        <label for="galat-sepertiga">galat-relatif(%):</label>
        <input type="number" id="galat-sepertiga" value="${resultGalat.toFixed(
          4
        )}" readonly />
      </div>`;
        container.append(galatRelatif);
      }
    }
  }

  function countSimpsonSeperlapan() {
    let { a, b, n, h, fx, eksak } = getIntegrasiNumerik();

    if (!n && h && fx) {
      n = Math.round((b - a) / h);
    } else if (!h && n && fx) {
      h = (b - a) / n;
    }

    if (n > 0) {
      $("#n").val(n);
      $("#h").val(h);
      const container = $("#dynamic-xi-fi");
      container.empty();

      const exprFx = math.parse(fx);
      const compileFx = exprFx.compile();

      let xiAccomod = [];
      let fiAccomod = [];

      for (let i = 0; i <= n; i++) {
        let xi = a + i * h;
        let fi = compileFx.evaluate({ x: xi });

        xiAccomod.push(xi);
        fiAccomod.push(fi);
      }

      let count = fiAccomod[0] + fiAccomod[n];
      for (let i = 1; i < n; i++) {
        const mod = (i - 1) % 3;
        if (mod === 0 || mod === 1) {
          count += 3 * fiAccomod[i];
        } else if (mod === 2) {
          count += 2 * fiAccomod[i];
        }
      }
      let result = ((3 * h) / 8) * count;

      for (let i = 0; i <= n; i++) {
        const xi = `
        <div class="form-group">
          <label for="x${i}-seperlapan">x${i}:</label>
          <input type="number" id="x${i}-seperlapan" value="${xiAccomod[
          i
        ].toFixed(4)}" readonly />
        </div>`;
        const fi = `
        <div class="form-group">
          <label for="f${i}-seperlapan">f${i}:</label>
          <input type="number" id="f${i}-seperlapan" value="${fiAccomod[
          i
        ].toFixed(4)}" readonly />
        </div>`;
        container.append(xi);
        container.append(fi);
      }
      const I = `
      <div class="form-group">
        <label for="I-seperlapan">I:</label>
        <input type="number" id="I-seperlapan" value="${result.toFixed(
          4
        )}" readonly />
      </div>`;
      container.append(I);
      if (eksak) {
        let countEksak = Math.abs((eksak - result.toFixed(4)) / eksak);
        let resultGalat = countEksak * 100;
        const galatRelatif = `
      <div class="form-group">
        <label for="galat-seperlapan">galat-relatif(%):</label>
        <input type="number" id="galat-seperlapan" value="${resultGalat.toFixed(
          4
        )}" readonly />
      </div>`;
        container.append(galatRelatif);
      }
    }
  }

  function getValPersDiff() {
    const x0 = parseFloat($("#x0-d").val());
    const y0 = parseFloat($("#y0-d").val());
    const xn = parseFloat($("#xn-d").val());
    const h = parseFloat($("#h-d").val());
    const fxy = $("#fxd").val();
    const n = parseInt($("#n-d").val());

    return { x0, y0, xn, h, n, fxy };
  }

  function evaluateFxy(expr, x, yEuler) {
    const compiled = math.parse(expr).compile();
    return compiled.evaluate({ x, y: yEuler });
  }

  function getExactFunctionWithAlgebrite(fxStr, x0, y0) {
    const defInt = `defint(${fxStr}, x, ${x0}, x)`; // integral simbolik dari x₀ ke x
    const integralExpr = Algebrite.run(defInt); // hasil: ekspresi dalam x
    const exactExpr = `${y0} + (${integralExpr})`; // y(x) = y₀ + integral
    return exactExpr;
  }

function countMetodeEuler() {
  const { x0, y0, xn, h, n, fxy } = getValPersDiff();
  const container = $("#dynamic-fxy");
  container.empty();

  let x = x0;
  let yEuler = y0;
  let nSteps = n || Math.round((xn - x0) / h);
  $("#n-d").val(nSteps);

  const includeY = fxy.includes("y");
  let compiledExact = null;

  if (!includeY) {
    const countIntegral = getExactFunctionWithAlgebrite(fxy, x0, y0);
    compiledExact = math.parse(countIntegral).compile();
  }

  let table = `
  <table class="result-table">
    <thead>
      <tr>
        <th>i</th>
        <th>xᵢ</th>
        <th>yᵢ (Euler)</th>
        <th>yᵢ (Eksak)</th>
        <th>Galat Relatif (%)</th>
      </tr>
    </thead>
    <tbody id="generatedBody">`;

  for (let i = 0; i <= nSteps; i++) {
    const fxyVal = evaluateFxy(fxy, x, yEuler);
    let yEksak = "-";
    let galat = "-";
    yEuler = yEuler + (fxyVal * h);

    if (!includeY && compiledExact) {
      yEksak = compiledExact.evaluate({ x });
      galat = Math.abs(((yEksak - yEuler) / yEksak)) * 100;
    }

    table += `
    <tr>
      <td>${i}</td>
      <td>${x.toFixed(4)}</td>
      <td>${yEuler.toFixed(4)}</td>
      <td>${typeof yEksak === "number" ? yEksak.toFixed(4) : "-"}</td>
      <td>${typeof galat === "number" ? galat.toFixed(4) : "-"}</td>
    </tr>`;

    console.log(`f(x,y)${i}: `, fxyVal)
    console.log(`y${i}: `, yEuler)
    x = x + h;
  }

  table += `</tbody></table>`;
  container.html(table);
}

function toggleMetodeEuler () {
  $('label[for="h-d"]').text("h:");
  $('#n-d').closest('.form-group').show();
  $('label[for="xn-d"]').text("y target:");
}

function toggleMetodeRungeKutta () {
  $('label[for="h-d"]').text("△x:");
  $('#n-d').closest('.form-group').hide();
  $('label[for="xn-d"]').text("x:");
}

function countMetodeRungeKutta() {
  const { x0, y0, xn, h, n, fxy } = getValPersDiff();
  const container = $("#dynamic-fxy");
  container.empty();

  let x = x0;
  let y = y0;
  let deltaX = h;
  const nSteps = n || Math.round((xn - x0) / deltaX);

  let table = `
  <table class="result-table">
    <thead>
      <tr>
         <th>xᵢ</th><th>k₁</th><th>k₂</th><th>k₃</th><th>yᵢ</th>
      </tr>
    </thead>
    <tbody>`;

    const k1 = evaluateFxy(fxy, x, y);
    const k2 = evaluateFxy(fxy, (x + deltaX / 2), (y + (deltaX / 2) * k1));
    const k3 = evaluateFxy(fxy, (x + deltaX), (y - (deltaX * k1) + (2 * deltaX * k2)));
    y = y + (deltaX / 6) * (k1 + 4 * k2 + k3);

    table += `
      <tr>
        <td>${x.toFixed(4)}</td>
        <td>${k1.toFixed(4)}</td>
        <td>${k2.toFixed(4)}</td>
        <td>${k3.toFixed(4)}</td>
        <td>${y.toFixed(6)}</td>
      </tr>`;

  table += `</tbody></table>`;
  container.html(table);
}



  tittleSectionOne();
  moveUnderlineOne();
  moveUnderlineTwo();
  moveUnderlineThree();

  $(".button-hitung").click(() => {
    if ($("#page4").is(":visible")) {
      const method = $(".calc-tab-four.active").data("method");

      if (method === "trapezium") countTrapezium();
      else if (method === "simpsonSepertiga") countSimpsonSepertiga();
      else if (method === "simpsonSeperlapan") countSimpsonSeperlapan();
    } else if ($("#page5").is(":visible")) {
      const method = $(".calc-tab-five.active").data("method");

      if (method === "euler") countMetodeEuler();
      else if (method === "rungeKutta") countMetodeRungeKutta();
    } else {
      // page3
      const method = $(".calc-tab.active").data("method");

      if (method === "linear") countInterpolasiLinear();
      else if (method === "quadratic") countInterpolasiKuadratik();
      else if (method === "newton") countInterpolasiBagiNewton();
      else if (method === "langrange") {
        const orde = $(".orde.active").data("method");

        if (orde === "orde1") {
          countInterpolasiLagrangeOrdeOne();
        } else if (orde === "orde2") {
          countInterpolasiLagrangeOrdeTwo();
        } else if (orde === "orde3") {
          countInterpolasiLagrangeOrdeThree();
        }
      }
    }
  });

  $(".button-reset").click(() => {
    $("#result").val(0);
    $(".form-group input").val(0);
    $("#dynamic-fxy").empty();
  });

  $("#linear").click(() => {
    $("#b0, #b1, #b2, #b3, #c1, #c2, #d1, #d2, #x2, #Fx2, #x3, #Fx3, #l0, #l1, #l2, #l3").parent().remove();
  });
  $("#quadratic").click(toggleInterpolasiKuadratik);
  $("#newton").click(toggleInterpolasiBagiNewton);

  $("#langrange").on("click", () => {
    $("#langrangeModal").addClass("active");
    $(".container-langrange").addClass("active");
  });

  $("#closeLangrangeModal").on("click", () => {
    $("#langrangeModal").removeClass("active");
    $(".container-langrange").removeClass("active");
  });

  $("#euler").click(toggleMetodeEuler);
  $("#rungeKutta").click(toggleMetodeRungeKutta);

  $(document).on("click", ".orde", function () {
    const method = $(this).data("method");

    $(".orde").removeClass("active");
    $(this).addClass("active");

    if (method === "orde1") {
      resetInput();
      toggleInterpolasiPolinomialLangrangeOne();
    } else if (method === "orde2") {
      resetInput();
      toggleInterpolasiPolinomialLangrangeTwo();
    } else if (method === "orde3") {
      resetInput();
      toggleInterpolasiPolinomialLangrangeThree();
    }

    $("#langrangeModal").removeClass("active");
    $(".container-langrange").removeClass("active");
  });

  $("#methodSelect").on("change", function () {
    const selected = $(this).val();
    $(".calc-tab").removeClass("active");
    $(`.calc-tab[data-method="${selected}"]`)
      .addClass("active")
      .trigger("click");

    if (selected === "langrange") {
      $("#langrangeModal").addClass("active");
      $(".container-langrange").addClass("active");
    }
  });

  $("#methodSelect-page4").on("change", function () {
    const selected = $(this).val();
    $(".calc-tab-four").removeClass("active");
    $(`.calc-tab-four[data-method="${selected}"]`)
      .addClass("active")
      .trigger("click");
  });

  $("#methodSelect-page5").on("change", function () {
    const selected = $(this).val();
    $(".calc-tab-five").removeClass("active");
    $(`.calc-tab-five[data-method="${selected}"]`)
      .addClass("active")
      .trigger("click");
  });

  $(".button-integrasi-three").click(() => {
    $("#page3").hide();
    $("#page4").show();
  });

  // Tombol kembali ke Interpolasi (page3)
  $(".button-integrasi-back").click(() => {
    $("#page4").hide();
    $("#page3").show();
  });

  $(".button-integrasi-next").click(() => {
    $("#page4").hide();
    $("#page5").show();
  });

  $(".button-integrasi-back-five").click(() => {
    $("#page5").hide();
    $("#page4").show();
  });
});
