# Village_project

Instalatuions:
1) npm create vite@latest my-app -- --template react-ts
2) npm install
3) npm install @emotion/react @emotion/styled styled components

4) npm install googleapis
5) npm install axios
6) npm install react-router-dom
7) npm install react-icons
8) npm install vite-plugin-string
9) npm install react-markdown
10) npm install react-quill --legacy-peer-deps
11) npm install marked
12) npm install gapi-script

// застаріла інфо
13) Для додавання нової картки і підключення до мережі, потрібно щоб 
name: "KOMPLETT Gerüstbau GmbH", та 
path: "/tradeServices/bau-&-renovierung#komplett-geruestbau-gmbh", та
<!-- KOMPLETTGERUESTBAUGMBH_NAME_START -->
KOMPLETT Gerüstbau GmbH
<!-- KOMPLETTGERUESTBAUGMBH_NAME_END -->
були повністю ідентичнми - слово слово, літера до літери!
Категорія Alle / All в бізнесі відсутня

14) Щоб розділити категорії потрібно: 
- зміни subCategory та path в subcategories.ts (file: IconSearch)
- змінити відповідний файл text.md, за потреби ств нові Page.txt + text.md файли
- додати новий шлях в App:  <Route path="
- якщо розділяємо в Бізнесі, то додати новий <StyledNavLink - повністю і змінити старий


// нова інфо

Щоб додати нову сторінку саочатку додаємо шлях в allPathInfo і потім сторінка - лист з Екселю зявляється 