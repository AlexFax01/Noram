// /api/scan.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};
    // ✅ Тут відбувається "дія".
    // Мінімально: лог + 200 ОК. Далі підключиш БД / Make / Supabase тощо.

    // Приклад Dual Control (спрощено): якщо checkpoint містить "Exit" → рухаємо стадію вперед
    // Місце для інтеграції:
    // - виклик Make/Zapier: fetch(WEBHOOK_URL, { method:'POST', ... })
    // - запис у Supabase/Firebase
    // - оновлення Google Sheets (Apps Script webhook)
    console.log('SCAN EVENT:', data);

    // Повертаємо відповідь фронту
    return res.status(200).json({ ok: true, received: data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: e.message });
  }
}
