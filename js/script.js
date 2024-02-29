 // 假设的座位信息
    const seats = {
        "张三": {
            "1号": "A1",
            "2号": "B2"
        },
        "李四": {
            "1号": "C3",
            "2号": "D4"
        },
        "IBM":{
            "1号": "C3",
            "2号": "D4"
        },
        "bbc":{
            "1号": "C3",
            "2号": "D4"
        },
        "aba":{
            "1号": "C3",
            "2号": "D4"
        },
        "ttk":{
            "1号": "C3",
            "2号": "D4"
        },
        "over":{
            "1号": "C3",
            "2号": "D4"
        },
        "interr":{
            "1号": "C3",
            "2号": "D4"
        },
        "kakak":{
            "1号": "C3",
            "2号": "D4"
        },
        "dadq":{
            "1号": "C3",
            "2号": "D4"
        },
        "qqa":{
            "1号": "C3",
            "2号": "D4"
        },
        "ssa":{
            "1号": "C3",
            "2号": "D4"
        },
        "dadada":{
            "1号": "C3",
            "2号": "D4"
        },
        "weee":{
            "1号": "C3",
            "2号": "D4"
        },
        "wer":{
            "1号": "C3",
            "2号": "D4"
        },
        "kingboer":{
            "1号": "C3",
            "2号": "D4"
        },
        "sqw":{
            "1号": "C3",
            "2号": "D4"
        },
        "dadaq":{
            "1号": "C3",
            "2号": "D4"
        },
        "sss":{
            "1号": "C3",
            "2号": "D4"
        },
        // 可以添加更多人的座位信息...
    };

    function querySeats() {
        const nameInput = document.getElementById('name');
        const name = nameInput.value;

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        if (seats[name]) {
            const seatsInfo = seats[name];

            const table = document.createElement('table');
            const headerRow = table.insertRow();
            const headerCell1 = headerRow.insertCell();
            headerCell1.innerHTML = '日期';
            const headerCell2 = headerRow.insertCell();
            headerCell2.innerHTML = '座位号';

            for (const date in seatsInfo) {
                const row = table.insertRow();
                const cell1 = row.insertCell();
                cell1.innerHTML = date;
                const cell2 = row.insertCell();
                cell2.innerHTML = seatsInfo[date];
            }

            resultDiv.appendChild(table);
        } else {
            resultDiv.innerHTML = '<p>未找到该名字的座位信息。</p>';
        }
    }