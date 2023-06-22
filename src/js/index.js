$(document).ready(Core);

function Core()
{
    InitChartJs()
}

function InitChartJs()
{
    let chart = document.getElementById('chart').getContext('2d'); // Находим Canvas для графика
    let label = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] // Массив с подписями X-оси

    let gradient = chart.createLinearGradient(0, 0, 0, 450); // Создаем градиет для первой линии

    gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
    gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    let gradient2 = chart.createLinearGradient(0, 0, 0, 450); // Создаем градиет для второй линии

    gradient2.addColorStop(0, 'rgba(15, 145, 163, 0.5)');
    gradient2.addColorStop(0.5, 'rgba(15, 145, 163, 0.25)');
    gradient2.addColorStop(1, 'rgba(15, 145, 163, 0)');


    new Chart(chart, {
        type: 'line', // Тип отрисовки графика
        data: {
            labels: label,
            datasets: [
                {
                    label: "Dataset 1", // Подпись линии
                    backgroundColor: gradient, // Цвет заливки линии
                    data: [40,35,10,40,38,80,50,45,60,70,55,65], // Значения по оси Х
                    fill: true, // Залить линию цветом
                    pointBackgroundColor: 'white', // Цвет точек на линии
                    borderWidth: 2, // Толщина линии
                    borderColor: '#911215', // Цвет линии
                    lineTension: 0.5 // Закругление
                },
                {
                    label: "Dataset 2",
                    backgroundColor: gradient2,
                    data: [60,55,35,40,8,35,55,65,30,50,55,85],
                    fill: true,
                    pointBackgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#0f91a3',
                    lineTension: 0.5
                }
            ],
        },
        options: {
            scales: {
                y: {
                    min: 0, // Минимальное значение на оси Y
                    grid: {
                        display: false // Отключить отрисовку сетки по оси Y
                    }
                },
                x: {
                    grid: {
                        display: false // Отключить отрисовку сетки по оси X
                    }
                }
            },
            responsive: true, // Адаптив
            maintainAspectRatio: false, // Сохронять соотношении сторон

        },

    });
}