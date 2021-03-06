# Место (проект 12)

**Ссылка  на GitHub Pages**
*  https://lifein2020.github.io/react-mesto-auth/
### Обзор

* Ссылка на GitHub Pages
* Описание проекта
* Примененные технологии
* Инструкция по развёртыванию (Quick Start)
* Figma
* Планы по доработке

**Описание проекта**

Mesto: интерактивная страница, где можно менять данные профиля и аватар, куда можно добавлять фотографии, просматривать их, удалять и ставить лайки. У лайков есть счетчик. Реализована аутентификация пользователя.
При нажатии на иконку "карандаш" появляется форма для редактирования профиля. При нажатии на аватар - форма редактирования изображения аватара. При нажатии на "+" - форма добавления фотографий. Чтобы посмотреть фотографию в увеличенном виде надо кликнуть по фото. Чтобы удалить свои добавленные фотографии, надо кликнуть по иконку корзины и подтвердить свое действие.
Данные схраняются на сервере.


**Примененные технологии**

React

В верстке соблюдена семантика, именование классов по БЭМ. 

В стилях применялись:
* адаптивная верстка;
* гриды;
* flexbox-верстка;
* все ссылки и интерактивные элементы имеют состояние наведения :hover (применен эффект плавного перехода при трансформации);
* все диалоговые окна плавно открываются - проявляются из прозрачности и уходят в неё при закрытии.
* контентные изображения имеют alt с корректным описанием, соответствующим языку страницы.

**Инструкция по развёртыванию (Quick Start)**
Если вы хотите работать с проектом локально:

1. Сделайте fork этого репозитория и клонируйте свою версию репозитория.
2. Установите npm-зависимости:
```sh
npm install
```
3. Запустите сборку проекта. Каждый раз, когда вы вносите изменения в проект будет скомпилирован в папку `build`
```sh
npm run build
```
4. Запустите сервер локально
```sh
npm run start
```
Если всё хорошо, то проект запустится на `http://localhost:3000`

**Figma**

* [Ссылки на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1) (https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=14975%3A305)

**Планы по доработке**
* добавить валидацию форм


