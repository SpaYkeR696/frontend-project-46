### Hexlet tests and linter status:
[![Actions Status](https://github.com/SpaYkeR696/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/SpaYkeR696/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/2e3e5a83bf2825c3a0dd/maintainability)](https://codeclimate.com/github/SpaYkeR696/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2e3e5a83bf2825c3a0dd/test_coverage)](https://codeclimate.com/github/SpaYkeR696/frontend-project-46/test_coverage)

# ВЫЧЕСЛИТЕЛЬ ОТЛИЧИЙ (JavaScript)

Это пакет для расчета разницы между двумя конфигурационными файлами.

Файлы конфигурации могут иметь расширение «yml», «yaml» или «json».

Результат расчета может быть в трех различных форматах: «plain», «json» и «default».

Для запуска приложения Вам необходимо ввести
1. имя приложения (gendiff)
2. пути к файлам
3. результирующий формат
   
## Установка

```
$ sudo npm link
```

## Флаги

```
$ -V версия
$ -f --format выбор формата
$ -h --help вывод доступных флагов
```

```
$ gendiff .\_tests_\_fixtures_\filepath1.json .\_tests_\_fixtures_\filepath2.yml
```

#### Примеры выполнения с разными форматами 

## Выполнение команды без форматов DEFAULT

![screen](/screenshots/screen1.jpg)

![screen](/screenshots/screen2.jpg)

## Выпонение команды с форматом <<plain>>

![screen](/screenshots/screen3.jpg)

![screen](/screenshots/screen4.jpg)

## Выпонение команды с форматом <<json>>

![screen](/screenshots/screen5.jpg)

![screen](/screenshots/screen6.jpg)