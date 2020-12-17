"use strict";

const charts = document.querySelectorAll('chart');
for (const chart of charts) {
  const data = JSON.parse(chart.querySelector('chartdata').innerHTML);
  let marginBottom = 0;
  let input = 0;
  let indirect = 0;
  const direct = 20;
  for (const datum of data) {
    const div = document.createElement('div');
    div.className = datum.type + " bars";
    div.innerHTML = '<br><span>' + datum.head + '</span><br><span class="value">' + datum.value + '%</span>';
    div.style.height = (datum.value * 4) + "px";
    if (datum.type !== 'retail') {
      div.style.marginBottom = (marginBottom * 4) + "px";
      marginBottom = marginBottom + datum.value;
    }
    if (datum.type === 'cost') {
      input = input + datum.value;
    }
    if (datum.type === 'indirect-tax') {
      indirect = indirect + datum.value;
    }
    chart.append(div);
  }
  const div = document.createElement('div');
  div.className = "statbox";
  div.innerHTML = '<span> Input Cost: <strong>' + input + '%</strong></span><br><span> Indirect Tax: <strong>' + indirect + '%</strong></span><br><span>Direct Tax: <strong>' + direct + '%</strong></span>';
  chart.append(div);
}