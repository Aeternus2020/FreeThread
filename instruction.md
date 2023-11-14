# Редагування файлів

## Меню Документа

- [Вступ](#вступ)
 - Товари:
   - [Структура і Зміна](#редагування_товарів)
     - [Існуючий товар](#зміна_існуючого_товару)
     - [Новий товар](#додавання_нового_товару)
       - [Приклад](#приклад_додавання_нового_товару)
- Коментарі:
  - [Структура і Зміна](#зміна_інформації_про_коментарі)
    - [Існуючий коментар](#зміна_існуючого_коментаря)
    - [Новий коментар](#додавання_нового_коментаря)
    - [Приклад](#приклад_додавання_нового_коментаря)
- Команда:
  -  [Структура і Зміна](#зміна_інформації_про_команду)
    - [Існуючий член](#зміна_існуючого_члена_команди)
    - [Новий член](#додавання_нового_члена_команди)
      - [Приклад](#приклад_додавання_нового_члена_команди)
- [Зауваження](#зауваження)

## Вступ

Ця документація містить інструкції щодо зміни інформації у файлах. Тут ви знайдете детальний опис того, де шукати необхідні файли та як вносити зміни.

## Структура Файлів

1. **Рубашки:**
   - Файл з рубашками розташований за шляхом `public/shirts.json`.

2. **Манжети:**
   - Файл з манжетами розташований за шляхом `public/accessories.json`.

3. **Коментарі:**
   - Файл з коментарями розташований за шляхом `public/comments.json`.

4. **Команда:**
   - Файл із списком команди розташований за шляхом `public/teams.json`.

## Редагування_товарів

### Структура товарів

Товари в обох файлах організовані у вигляді масиву об'єктів. Кожен об'єкт представляє окремий товар і містить інформацію про нього.

## Структура полів товару

### Рубашки (shirts.json)
![shirts.json](/shirts.png)

### Манжети (accessories.json)
![accessories.json](/accessories.png)

1. `id` (string) - Унікальний ідентифікатор товару.
2. `name` (string) - Назва товару.
3. `price` (string) - Ціна товару.
4. `recommendations` (string) - Рекомендації або поради щодо використання товару.
5. `description` (string) - Опис товару.
6. `collection` (string) - Категорія або колекція, до якої відноситься товар.
7. `imageUrls` (array of strings) - Масив URL-адрес зображень товару.
8. `size` (array of strings) - Масив доступних розмірів товару.

## Зміна інформації про товари

### Зміна_існуючого_товару

1. **Відкрийте відповідний файл:**
   - Для рубашок: `public/shirts.json`.
   - Для манжет: `public/accessories.json`.

2. **Знайдіть необхідний товар:**
   - Знайдіть об'єкт товару за його `id`, щоб внести зміни.

3. **Внесіть зміни:**
   - Внесіть необхідні зміни у поля об'єкта, такі як `name`, `price`, `recommendations` і т.д.

4. **Збережіть файл:**
   - Збережіть внесені зміни у файлі даних. (CTRL + S)

## Додавання_нового_товару

1. **Відкрийте відповідний файл:**

   - Для рубашок: `public/shirts.json`.
   - Для манжет: `public/accessories.json`.

2. **Додайте новий об'єкт:**
   - Додайте новий об'єкт до масиву товарів, дотримуючись структури файлу.

3. **Внесіть інформацію про товар:**
   - Заповніть всі необхідні поля для нового товару, такі як `name`, `price`, `recommendations` і т.д.

4. **Збережіть файл:**
   - Збережіть внесені зміни у файлі даних. (CTRL + S)

### Приклад_додавання_нового_товару

Приклад додавання нового товару до `shirts.json`:

![new product](/new_product.png)

## Зміна_інформації_про_коментарі

### Структура комментарів

Файл коментарів представляє собою масив об'єктів, де кожен об'єкт відповідає одному коментарю. Кожен коментар має ряд полів, які зберігають різні аспекти коментаря.

## Структура полів коментаря

### Коментарі (comments.json)
![comments.json](/comments.png)

1. `id` (string) - Унікальний ідентифікатор коментаря.
2. `name` (string) - Ім'я автора коментаря.
3. `date` (string) - Дата створення коментаря.
4. `star` (number) - Оцінка коментаря у вигляді кількості зірок (від 1 до 5).
5. `body` (string) - Тіло коментаря, що містить текстовий вміст.

### Зміна_існуючого_коментаря

1. **Відкрийте відповідний файл:**
   - `public/comments.json`.

2. **Знайдіть необхідний коментар:**
  - Знайдіть об'єкт коментаря за його `id`, щоб внести зміни.

3. **Внесіть зміни:**
   - Внесіть необхідні зміни у поля об'єкта, такі як `name`, `date`, `star`, `body` і т.д.

4. **Збережіть файл:**
   - Збережіть внесені зміни у файлі даних. (CTRL + S)

### Додавання_нового_коментаря

1. **Відкрийте відповідний файл:**
   - `public/comments.json`.

2. **Додайте новий об'єкт:**
   - Додайте новий об'єкт до масиву коментарів, дотримуючись структури файлу.

3. **Внесіть інформацію про товар:**
   - Заповніть всі необхідні поля для нового коментаря, такі як `name`, `date`, `star`, `body` і т.д.

4. **Збережіть файл:**
   - Збережіть внесені зміни у файлі даних. (CTRL + S)

### Приклад_додавання_нового_коментаря

Приклад додавання нового коментаря до `comments.json`:

![new comment](/new_comment.png)

## Зміна_інформації_про_команду

### Структура файла команди

Файл з командою містить інформацію про членів команди. Кожен об'єкт у масиві представляє окремого члена команди.

## Структура полів члена команди

### Команда (teams.json)
![team.json](/team.png)

1. `image` (string) - Шлях до зображення члена команди.
2. `name` (string) - Ім'я члена команди.
3. `position` (string) - Посада члена команди.
4. `city` (number) - Місто, в якому знаходиться член команди.

### Зміна_існуючого_члена_команди

1. **Відкрийте відповідний файл:**
   - `public/teams.json`.

2. **Знайдіть необхідний запис про команду:**
   - Знайдіть об'єкт запису за ім'ям або іншим унікальним ідентифікатором, щоб внести зміни.

3. **Внесіть зміни:**
   - Внесіть необхідні зміни у поля об'єкта, такі як `image`, `name`, `position`, `city` і т.д.

4. **Збережіть файл:**
   - Збережіть внесені зміни у файлі даних. (CTRL + S)

### Додавання_нового_члена_команди

1. **Відкрийте відповідний файл:**
   - `public/teams.json`.

2. **Додайте новий об'єкт:**
   - Додайте новий об'єкт до масиву команди, дотримуючись структури файлу.

3. **Внесіть інформацію про новий запис:**
   - Заповніть всі необхідні поля для нового запису, такі як `image`, `name`, `position`, `city` і т.д.

4. **Збережіть файл:**
   - Збережіть внесені зміни у файлі даних. (CTRL + S)

### Приклад_додавання_нового_члена_команди

Приклад додавання нового запису про команду до `teams.json`:

![new team](/new_team.png)

## Зауваження:

1. Усі зміни повинні вноситися відповідно до формату файлів JSON.

2. Дотримуйтесь цих кроків, щоб успішно оновити інформацію у вашому додатку.

3. Навіть пропущена кома може призвести до помилки, тому будьте уважні при редагуванні JSON-файлів.

4. При зміні або видаленні товарів в розділі рубашок, будь ласка, майте на увазі, що є всього 3 колекції: 'kiev', 'grandmother', 'regions'.

5. У файлі з манжетами (accessories.json) завжди додавайте товари до колекції 'accessories'.