// Установка GIT и настройка

https://git-scm.com/download/win
winget install --id Git.Git -e --source winget
git config --global user.name "Babchenko Vladislav"
git config --global user.email Babch.vl@gmail.com
git config -- list       // все настройки

git init               // создание нового гит репозитория в текущей папке
git branch -m "name"   // переименовать папку
git branch -d    // удалить
git branch -a    // посмотреть все ветки
git status             // отображает текущее состояние репозитория


git add <File>              // добавление всех изменений в индекс
git commit -m "<message>"   // сохранение в репозиторий
git checkout                // из репозитория в рабочую директорию
git log                     // история изменений
git push                    // вносим изменения с локального на облачный репозиторий
git pull                    // вносим изменения с облачного репозитория на  локальный
git clone <url>             // копирование удаленного репозитория на комп

git remote add origin <url> // связывает локальный репозиторий и удаленный
git push -u origin <branch> // загрузка изменений из локального в удаленную с создание связи между ними




//  команды повершел
cd ~/desktop              // perehod v papky
mkdir my-project          // создание папки в этой директории
cd my-project             // переход в папку
echo "some text" > File.txt    // создание файла
ls                             // список файлов
cat File.txt                   // чтение файла
rm File.txt                    // удаление файла
ls -Force                      // отображение скрытых папок и файлов