# Kalkulator-Metode-numerik
**Membuat Program Metode Numerik yang diimplementasikan menjadi sebuah kalkulator sederhana**
**Untuk menghitung fungsinya(x, y), saya menggunakan library _Math.js_ dan _Algebrite.js_**
**Program ini di buat untuk menunjang Tugas Metode Numerik di Semester 4**

### Kelompok 2 
- Reno Faza Givaro (202343501362)
- Rafli Mulya Hananta (202343501356)
- Ababil Wahyu Nugroho (202343501373)
- Bagas Dwi Susanto (202343501351)


### Syntax Menghitung Interpolasi Linier
```javascript
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
```

### Syntax Menghitung Interpolasi Kuadratik
```javascript
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
```


### Syntax Menghitung Interpolasi Bagi Newton
```javascript
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
    const b3 = (c2 - b2) / (x3 - x0);
    $("#b3").val(b3.toFixed(4));
    const result =
      b0 +
      b1 * (x - x0) +
      b2 * (x - x0) * (x - x1) +
      b3 * (x - x0) * (x - x1) * (x - x2);
    $("#result").val(result.toFixed(4));
  }
```


### Syntax Menghitung Interpolasi Langrange

**Langrange Orde 1**
```javascript
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
```

**Langrange Orde 2**
```javascript
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
```

**Langrange Orde 3**
```javascript
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
```


## Syntax Menghitung Integrasi Numerik

```javascript
  function getIntegrasiNumerik() {
    let a = parseFloat($("#a").val());
    let b = parseFloat($("#b").val());
    let n = parseInt($("#n").val());
    let h = parseFloat($("#h").val());
    let fx = $("#fx").val();
    let eksak = $("#eksak").val();

    return { a, b, n, h, fx, eksak };
  }
```

**Metode Trapezium**
```javascript
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
```

**Metode Simpson 1/3**
```javascript
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
```

**Metode Simpson 3/8**
```javascript
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
```


### Syntax Menghitung Persamaan Differensial

**Hitung persamaan fungsinya**
```javascript
  function evaluateFxy(expr, x, yEuler) {
    const compiled = math.parse(expr).compile();
    return compiled.evaluate({ x, y: yEuler });
  }
```

**Hitung integral dari persamaan fungsi**
```javascript
  function getExactFunctionWithAlgebrite(fxStr, x0, y0) {
    const defInt = `defint(${fxStr}, x, ${x0}, x)`;
    const integralExpr = Algebrite.run(defInt);
    const exactExpr = `${y0} + (${integralExpr})`;
    return exactExpr;
  }
```

**Metode Euler**
```javascript
  function getValPersDiff() {
    const x0 = parseFloat($("#x0-d").val());
    const y0 = parseFloat($("#y0-d").val());
    const xn = parseFloat($("#xn-d").val());
    const h = parseFloat($("#h-d").val());
    const fxy = $("#fxd").val();
    const n = parseInt($("#n-d").val());

    return { x0, y0, xn, h, n, fxy };
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

    if (!includeY && compiledExact) {
      yEksak = compiledExact.evaluate({ x });
      galat = Math.abs(((yEksak - yEuler) / yEksak) * 100);
    }

    table += `
    <tr>
      <td>${i}</td>
      <td>${x.toFixed(4)}</td>
      <td>${yEuler.toFixed(4)}</td>
      <td>${typeof yEksak === "number" ? yEksak.toFixed(4) : "-"}</td>
      <td>${typeof galat === "number" ? galat.toFixed(4) : "-"}</td>
    </tr>`;

    yEuler = yEuler + (fxyVal * h);
    console.log(`f(x,y)${i}: `, fxyVal)
    console.log(`y${i}: `, yEuler)
    x = x + h;
  }

  table += `</tbody></table>`;
  container.html(table);
}
```


**Metode Runge-Kutta**
```javascript
  function getValPersDiff() {
    const x0 = parseFloat($("#x0-d").val());
    const y0 = parseFloat($("#y0-d").val());
    const xn = parseFloat($("#xn-d").val());
    const h = parseFloat($("#h-d").val());
    const fxy = $("#fxd").val();
    const n = parseInt($("#n-d").val());

    return { x0, y0, xn, h, n, fxy };
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
```