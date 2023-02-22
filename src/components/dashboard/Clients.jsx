/* eslint-disable arrow-body-style */

import MUIDataTable from 'mui-datatables';
import React, { useEffect } from 'react';

const columns = [
    {
        name: 'description',
        label: 'Xizmat turi'
    },
    {
        name: 'price',
        label: 'Rezidentlar uchun'
    },
    {
        name: 'price1',
        label: 'Norezidentlar uchun'
    }
];

const options = {
    filter: true,
    sort: true,
    selectableRows: 'none',
    onRowClick: (rowData, rowState) => {
        console.log(rowData);
        console.log(rowState);
    }

};
const Clients = () => {

    const prices = [{ "_id": "6247d3c0228627feddbf1dc0", "description": "Врач гинеколог кўриги", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247d420228627feddbf1dc2", "description": "Бачадон бўйнидан полип олиш", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247d921228627feddbf1dd6", "description": "Бачадон бўйни электрокоагуляцияси", "price": "80000", "price1": "160000", "__v": 0 }, { "_id": "6247d93b228627feddbf1dd9", "description": "Кольпоскопия", "price": "80000", "price1": "160000", "__v": 0 }, { "_id": "6247d955228627feddbf1ddb", "description": "Врач терапевт кўриги", "price": "35000", "price1": "70000", "__v": 0 }, { "_id": "6247d95f228627feddbf1ddd", "description": "Электрокардиограмма", "price": "35000", "price1": "70000", "__v": 0 }, { "_id": "6247d97b228627feddbf1de0", "description": "Врач маммолог куриги", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247d992228627feddbf1de2", "description": "Врач эндоскопист куриги", "price": "80000", "price1": "160000", "__v": 0 }, { "_id": "6247d99d228627feddbf1de4", "description": "Колоноскопия", "price": "85000", "price1": "170000", "__v": 0 }, { "_id": "6247d9b1228627feddbf1de6", "description": "Бронхоскопия", "price": "85000", "price1": "170000", "__v": 0 }, { "_id": "6247d9bd228627feddbf1de8", "description": "Цистоскопия", "price": "85000", "price1": "170000", "__v": 0 }, { "_id": "6247d9d0228627feddbf1dea", "description": "УЗИ (қорин бўшлиғи аъзолари)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247d9df228627feddbf1dec", "description": "УЗИ(периферик лимфа тугунлари, қалқонсимон без, сўлак безлари)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247d9f2228627feddbf1dee", "description": "УЗИ (чаноқ бўшлиғи аъзолари)", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247da06228627feddbf1df0", "description": "УЗИ (юмшоқ тўқималар)", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247da3a228627feddbf1df3", "description": "УЗИ(бачадон вагинальный)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247da61228627feddbf1df5", "description": "УЗИ (сут безлари регионал лимфа тугунлари)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247da71228627feddbf1df7", "description": "УЗИ (сут безлари)", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247da82228627feddbf1df9", "description": "УЗИ (буйраклар)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247da92228627feddbf1dfb", "description": "УЗИ(органы мошонки)", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247daa1228627feddbf1dfd", "description": "УЗИ (қалқонсимон без)", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247dab1228627feddbf1dff", "description": "УЗИ (трансректальное исследования)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247dac5228627feddbf1e01", "description": "УЗИ (периферик лимфа тугунлари)", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247dad6228627feddbf1e03", "description": "Пункционная биопсия под контролем УЗИ", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247dae3228627feddbf1e05", "description": "Триада қон тахлили", "price": "30000", "price1": "60000", "__v": 0 }, { "_id": "6247db12228627feddbf1e08", "description": "Пап тест", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247db32228627feddbf1e0a", "description": "Флора учун аёллар суртма тахлили", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247db41228627feddbf1e0c", "description": "Қоннинг умумий ёйма тахлили", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247db53228627feddbf1e0e", "description": "Умумий сийдик тахлили", "price": "40000", "price1": "80000", "__v": 0 }, { "_id": "6247db63228627feddbf1e10", "description": "Нажасни паразитларга тахлили", "price": "30000", "price1": "60000", "__v": 0 }, { "_id": "6247db74228627feddbf1e12", "description": "СА 19-9 ИФА", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247db85228627feddbf1e14", "description": "СА 15-3 ИФА", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dbc4228627feddbf1e19", "description": "СА 125 ИФА", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dbfb228627feddbf1e1b", "description": "ХГЧ", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dc0c228627feddbf1e1d", "description": "Пролактин", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dc23228627feddbf1e1f", "description": "ПСА", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dc36228627feddbf1e21", "description": "СЭА", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dc4a228627feddbf1e23", "description": "Гепатит В", "price": "25000", "price1": "50000", "__v": 0 }, { "_id": "6247dc5c228627feddbf1e25", "description": "Гепатит С", "price": "25000", "price1": "50000", "__v": 0 }, { "_id": "6247dc6e228627feddbf1e27", "description": "АФП", "price": "55000", "price1": "110000", "__v": 0 }, { "_id": "6247dc82228627feddbf1e29", "description": "Қоннинг биохимиявий тахлили (Хар бир тахлил 25000сўм *6 дона, билирубин 30000 сўм )", "price": "180000", "price1": "360000", "__v": 0 }, { "_id": "6247dc92228627feddbf1e2b", "description": "Рентгенография кўкрак қафаси ", "price": "70000", "price1": "140000", "__v": 0 }, { "_id": "6247dca5228627feddbf1e2d", "description": "Рентгенография бош суяги", "price": "60000", "price1": "120000", "__v": 0 }, { "_id": "6247dcb5228627feddbf1e2f", "description": "Рентгенография суяк ва бўғимлар", "price": "50000", "price1": "100000", "__v": 0 }, { "_id": "6247dcc5228627feddbf1e31", "description": "Рентген Қизилўнгач барий билан", "price": "90000", "price1": "180000", "__v": 0 }, { "_id": "6247dcd5228627feddbf1e33", "description": "Рентген ошқозон барий билан", "price": "90000", "price1": "180000", "__v": 0 }, { "_id": "6247dce4228627feddbf1e35", "description": "Экскретер урография буйрак контраст билан", "price": "210000", "price1": "420000", "__v": 0 }, { "_id": "6247dcf3228627feddbf1e37", "description": "Фистулография", "price": "95000", "price1": "190000", "__v": 0 }, { "_id": "6247dd02228627feddbf1e39", "description": "Ирригоскопия", "price": "200000", "price1": "400000", "__v": 0 }, { "_id": "6247dd11228627feddbf1e3b", "description": "Рентгеноскопия", "price": "30000", "price1": "60000", "__v": 0 }, { "_id": "6247dd24228627feddbf1e3d", "description": "Органларнинг цитологик тахлили\n", "price": "50000\n", "price1": "100000", "__v": 0 }, { "_id": "6247dd3c228627feddbf1e40", "description": "Гистологик тахлил (биопсия 3- кунда)\n", "price": "85000\n", "price1": "170000", "__v": 0 }, { "_id": "6247dd47228627feddbf1e42", "description": "Гистологик тахлил (биопсия 7- кунда)\n", "price": "85000\n", "price1": "170000", "__v": 0 }, { "_id": "6247dd55228627feddbf1e44", "description": "Гистологик тахлил (операциядан чиққан ўсимта  3- кунда)\n", "price": "110000\n", "price1": "220000", "__v": 0 }, { "_id": "6247dd61228627feddbf1e46", "description": "Гистологик тахлил (операциядан чиққан ўсимта 7-кунда)\n", "price": "100000\n", "price1": "200000", "__v": 0 }, { "_id": "6247dd97228627feddbf1e48", "description": "МСКТ (Суяк ва юмшоқ тўқималар)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247dda6228627feddbf1e4a", "description": "МСКТ  (Қорин бўшлиғи аъзолари)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247ddb0228627feddbf1e4c", "description": "МСКТ (Кичик чаноқ бўшлиғи аъзолари)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247ddbe228627feddbf1e4e", "description": "МСКТ (Бўйин, кўкрак, бел-думғаза умуртқалари)\n", "price": "420000\n", "price1": "840000", "__v": 0 }, { "_id": "6247ddca228627feddbf1e50", "description": "МСКТ (бош мия)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247ddd6228627feddbf1e52", "description": "МСКТ (Бел ва думғаза сохаси)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247dde1228627feddbf1e54", "description": "МСКТ (Бўйин юмшоқ тўқима ва суяги)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247ddec228627feddbf1e56", "description": "МСКТ (Кўкрак қафаси)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247ddf7228627feddbf1e58", "description": "МСКТ (иккала қўл бўғимлари суяги)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247de47228627feddbf1e5a", "description": "МСКТ (иккала оёқ бўғимлари ва суяги)\n", "price": "210000\n", "price1": "420000", "__v": 0 }, { "_id": "6247de53228627feddbf1e5c", "description": "Ангиография\n", "price": "770000\n", "price1": "1540000", "__v": 0 }, { "_id": "6247de5e228627feddbf1e5e", "description": "Вентрал чурра кесиш операцияси\n", "price": "680000\n", "price1": "1360000", "__v": 0 }, { "_id": "6247de6a228627feddbf1e60", "description": "Чов чурраси кесиш операцияси\n", "price": "365000\n", "price1": "730000", "__v": 0 }, { "_id": "6247de74228627feddbf1e62", "description": "Киндик чуррасини бартараф этиш операцияси\n", "price": "345000\n", "price1": "690000", "__v": 0 }, { "_id": "6247de82228627feddbf1e64", "description": "Холицистэктомия операцияси\n", "price": "530000\n", "price1": "1060000", "__v": 0 }, { "_id": "6247de8e228627feddbf1e66", "description": "Қорин бўшлиғи абцессини очиш ва дренашлаш операцияси\n", "price": "510000\n", "price1": "1020000", "__v": 0 }, { "_id": "6247de9c228627feddbf1e68", "description": "Липомани олиш операцияси\n", "price": "195000\n", "price1": "390000", "__v": 0 }, { "_id": "6247dea4228627feddbf1e6a", "description": "Тубоворэктомия\n", "price": "340000\n", "price1": "680000", "__v": 0 }, { "_id": "6247deb0228627feddbf1e6c", "description": "Водоянка яичника\n", "price": "340000\n", "price1": "680000", "__v": 0 }, { "_id": "6247deb9228627feddbf1e6e", "description": "Бачадон ортиқлари билан қин усти ампутацияси\n", "price": "700000\n", "price1": "1400000", "__v": 0 }, { "_id": "6247dec4228627feddbf1e70", "description": "Қалқонсимон без субтотал резекцияси\n", "price": "680000\n", "price1": "1360000", "__v": 0 }, { "_id": "6247decf228627feddbf1e72", "description": "Тери ости  мастэктомияси (гинекомастэктомия)\n", "price": "350000\n", "price1": "700000", "__v": 0 }, { "_id": "6247df09228627feddbf1e74", "description": "Анал канали полипини олиш\n", "price": "680000\n", "price1": "1360000", "__v": 0 }, { "_id": "6247df16228627feddbf1e76", "description": "Ушивания пузырно-влагалишного свиша\n", "price": "1705000\n", "price1": "3410000", "__v": 0 }, { "_id": "6247df23228627feddbf1e78", "description": "Операция Иваниссевича\n", "price": "510000\n", "price1": "1020000", "__v": 0 }, { "_id": "6247df2d228627feddbf1e7a", "description": "Удаления кисты семенного канатика\n", "price": "510000\n", "price1": "1020000", "__v": 0 }, { "_id": "6247df38228627feddbf1e7c", "description": "Диагностик лапаротомия.Ревизия.Дренирования.  \n", "price": "860000\n", "price1": "1720000", "__v": 0 }, { "_id": "6247df45228627feddbf1e7e", "description": "Диагностик лапаротомия.Ревизия.Дренирования.  Биопсия\n", "price": "912000\n", "price1": "1824000", "__v": 0 }, { "_id": "6247df52228627feddbf1e80", "description": "Лапаратомия. Радикальная  нефректомия лимфодиссекцией\n", "price": "1420000\n", "price1": "2840000", "__v": 0 }, { "_id": "6247df5f228627feddbf1e82", "description": "Лапаратомия паллиативная нефректомия\n", "price": "1545000\n", "price1": "3090000", "__v": 0 }, { "_id": "6247df76228627feddbf1e84", "description": "Тур мочевого пузыря\n", "price": "1020000\n", "price1": "2040000", "__v": 0 }, { "_id": "6247df82228627feddbf1e86", "description": "реТур мочевого пузыря\n", "price": "1020000\n", "price1": "2040000", "__v": 0 }, { "_id": "6247df8c228627feddbf1e88", "description": "Резекция мочевого пузыря. Эпицистостомия\n", "price": "1600000\n", "price1": "3200000", "__v": 0 }, { "_id": "6247df9a228627feddbf1e8a", "description": "Ревизия мочевого пузыря. Биопсия. Эпицистостомия\n", "price": "884000\n", "price1": "1768000", "__v": 0 }, { "_id": "6247dfa1228627feddbf1e8c", "description": "Лапаратомия адреналэктомия\n", "price": "1412000\n", "price1": "2824000", "__v": 0 }, { "_id": "6247dfad228627feddbf1e8e", "description": "Тур аденомы\n", "price": "1000000\n", "price1": "2000000", "__v": 0 }, { "_id": "6247dfc7228627feddbf1e91", "description": "Открытая аденомэктомия. Эпицистостомия\n", "price": "1150000\n", "price1": "2300000", "__v": 0 }, { "_id": "6247dfd1228627feddbf1e93", "description": "Орхофуникулэктомия\n", "price": "1045000\n", "price1": "2090000", "__v": 0 }, { "_id": "6247dfdb228627feddbf1e95", "description": "ПК Нефростомия\n", "price": "900000\n", "price1": "1800000", "__v": 0 }, { "_id": "6247dfe7228627feddbf1e97", "description": "ПК Цистостомия\n", "price": "550000\n", "price1": "1100000", "__v": 0 }, { "_id": "6247dff1228627feddbf1e99", "description": "Резекция уретры. Пластика уретры\n", "price": "850000\n", "price1": "1700000", "__v": 0 }, { "_id": "6247dffb228627feddbf1e9b", "description": "Иссечения опухоли кожы\n", "price": "375000\n", "price1": "750000", "__v": 0 }, { "_id": "6247e009228627feddbf1e9d", "description": "Иссечения опухоли кожы со свободной пластикой\n", "price": "400000\n", "price1": "800000", "__v": 0 }, { "_id": "6247e013228627feddbf1e9f", "description": "Операция Дюкена\n", "price": "400000\n", "price1": "800000", "__v": 0 }, { "_id": "6247e01d228627feddbf1ea1", "description": "Остеотомия с экскохлеацией, краевая резекция\n", "price": "395000\n", "price1": "790000", "__v": 0 }, { "_id": "6247e027228627feddbf1ea3", "description": "Резекция ребер, резекция грудины, резекция ключицы\n", "price": "425000\n", "price1": "850000", "__v": 0 }, { "_id": "6247e032228627feddbf1ea5", "description": "Экскохлеация опухоли с цементопластикой\n", "price": "410000\n", "price1": "820000", "__v": 0 }, { "_id": "6247e03d228627feddbf1ea7", "description": "Экскохлеация опухоли с аутопластикой\n", "price": "425000\n", "price1": "850000", "__v": 0 }, { "_id": "6247e047228627feddbf1ea9", "description": "Открытая биопсия из опухоли\n", "price": "100000\n", "price1": "200000", "__v": 0 }, { "_id": "6247e051228627feddbf1eab", "description": "Эксцизионная биопсия\n", "price": "100000\n", "price1": "200000", "__v": 0 }, { "_id": "6247e05d228627feddbf1ead", "description": "Трепан биопсия\n", "price": "100000\n", "price1": "200000", "__v": 0 }, { "_id": "6247e06b228627feddbf1eaf", "description": "Субтотальная резекция околоушной слюнной железы\n", "price": "420000\n", "price1": "840000", "__v": 0 }, { "_id": "6247e073228627feddbf1eb1", "description": "Паротидэктомия\n", "price": "400000\n", "price1": "800000", "__v": 0 }, { "_id": "6247e081228627feddbf1eb3", "description": "Гайморотомия с удалением опухоли\n", "price": "435000\n", "price1": "870000", "__v": 0 }, { "_id": "6247e089228627feddbf1eb5", "description": "Резекция верхней челюсти\n", "price": "400000\n", "price1": "800000", "__v": 0 }, { "_id": "6247e099228627feddbf1eb7", "description": "Половинная резекция языка\n", "price": "430000\n", "price1": "860000", "__v": 0 }, { "_id": "6247e0a5228627feddbf1eb9", "description": "Операциядан кейинги боғловлар\n", "price": "30000\n", "price1": "60000", "__v": 0 }, { "_id": "6247e102228627feddbf1ebe", "description": "Сут бези саратони бўйича радикал мастэктомия (норезидентлар учун)\n", "price": "0", "price1": "700000\t\n", "__v": 0 }]
    let cprices = [];

    if (prices && prices.length > 0) {
        cprices = [...prices];
    }
    return (
        <>
            <div
                style={{
                    backgroundColor: '#e5e5e5',
                    overflow: 'auto',
                    width: '90%',
                    margin: '30px auto'
                }}
            >
                <MUIDataTable
                    title="Xizmat narxlari"
                    data={cprices}
                    columns={columns}
                    options={options}
                />
            </div>
        </>
    );
};
export default Clients;