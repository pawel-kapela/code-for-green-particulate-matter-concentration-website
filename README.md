# Code for Green & Zespół Szkół Politechnicznych im. Bohaterów Monte Cassino we Wrześni

<p align="center">
  <img src="/public/img/logo2.png?raw=true" alt="Code for Green logo">
</p>

## Strona internetowa szkolnej stacji pomiaru zanieczyszczenia powietrza przez pyły zawieszone PM1, PM2.5, PM1O

### Czym to jest?

Jest to strona poświęcona podstawowym informacjom o zanieczyszczeniu powietrza przez pyły zawieszone oraz wyświetlająca ostatnie odczyty ze szkolnej stacji pomiarowej wraz z opisem działania zastosowanego czujnika (Plantower PMS5003) oraz jego platformy (Raspberry Pi 3 B+/Raspberry Pi Zero W).

### Jak to działa?

Strona zawiera w sobie logikę odpowiadającą za pobieranie danych z bazy danych umieszczonej na szkolnym serwerze (backend) oraz samą jednostronicową aplikację internetową (SPA), która wyświetla dane z serwera (frontend).

### Jak zainstalować tę stronę na naszym serwerze?

Najpierw musimy zadbać o źródło danych. Należy zatem najpierw skonfigurować [stację pomiarową](https://github.com/pawel-kapela/code-for-green-particulate-matter-sensor).

Instalacja strony:
- Sklonuj repozytorium używając polecenia ```git clone <adres tego repozytorium>```
- Zainstaluj menedżer pakietów Composer i zainstaluj zależności PHP używając polecenia ```composer install``` w katalogu projektu
- Zainstaluj menedżer pakietów NPM i zainstaluj zależności JavaScript używając polecenia ```npm install``` w katalogu projektu
- Skonfiguruj adres URl strony, katalog, w którym się znajduje oraz dane potrzebne do połączenia się z bazą danych (tabela z pomiarami musi nazywać się ```measurements```):
```
APP_URL="<adres_strony>"
APP_DIR="<nazwa_podstony/katalogu>"

DB_CONNECTION="mysql"
DB_HOST="<serwer_z_bazą_danych>"
DB_PORT=3306
DB_DATABASE="<nazwa_bazy_danych>"
DB_USERNAME="<nazwa_użytkownika>"
DB_PASSWORD="<hasło>"
```
- Otwórz plik znajdujący się pod ścieżką ```resources/js/components/Root.js``` i dostosuj atrybut ```basename``` w znaczniku ```Router``` w 32 linijce tak, aby odpowiadał położeniu strony na serwerze (np. codeforgreen.zspwrzesnia.pl/powietrze -> <Router **baseline="/powietrze"**>)
- Przygotuj stronę do wdrożenia poprzez "skompilowanie" jej używając polecenia ```npm run prod```
- Wrzuć zawartość całego katalogu projektu do wybranego katalogu na serwerze używając klienta FTP (np. FileZilla)

Gratulacje! :) Właśnie udało Ci się umieścić stronę na serwerze.
Jeżeli masz wątpliwości, bądź coś nie działa, skontaktuj się ze mną poprzez e-mail: pawel.kapela@protonmail.com
