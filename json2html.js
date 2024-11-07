export default function json2html(data) {
  const headers = Array.from(new Set(data.flatMap(Object.keys)));
  let html = `<table data-user="saisnigdhakondamadugu@gmail.com">`;
  html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
  html += `<tbody>`;
  for (const row of data) {
    html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  }
  html += `</tbody></table>`;
  return html;
}
