// =============== 프로세스 색상 지정 ColorList ===============
var colors = ['#314e41', '#ec76fb', '#4fccd3', '#bc03b5', '#FAFD52', '#37e1a7', '#de01ba', '#2d9afd', '#39a057', '#452ed2', 
                '#9ef1dd', '#fb6c97', '#a06324', '#857985', '#c27aa3', '#ba4725', '#1335ae', '#aa6144', '#566150', '#bbb3bb', 
                '#29b6b9', '#8c05e4', '#c2b0f8', '#4B6AE9', '#4eba79', '#3a86da', '#d16dde', '#ced801', '#8BFF63', '#c897ad', 
                '#efdb8d', '#54e1ba', '#224ac7', '#c84d1a', '#c1ed65', '#ac1d34', '#f9d2f2', '#5ec245', '#80b479', '#b04aba', 
                '#4ca70a', '#801f44', '#FF5700', '#8AC6FF', '#854ab5', '#a135c0', '#7e0e0c', '#a43b1c', '#C7FF6E', '#62e061', 
                '#29ad06', '#E964F7', '#37aa79', '#1c7f9c', '#E95A68', '#8b7e8a', '#831bc7', '#700faa', '#b1712b', '#8668e0', 
                '#dea092', '#374bcc', '#8acb78', '#4df6bb', '#777cca', '#15d1c3', '#9713FF', '#972d19', '#2a98a0', '#357b38', 
                '#d24cbe', '#47379e', '#2d7187', '#2bd85c', '#7044e4', '#b1752b', '#3e9feb', '#d80ef3', '#f97b8d', '#e1018e', 
                '#b0ea54', '#be0347', '#b8d524', '#c9fcbc', '#7a6b4d', '#dabc25', '#dbd578', '#6c2994', '#385f43', '#dd9418', 
                '#94178a', '#832005', '#c80458', '#9a13bf', '#a559af', '#4ee8ec', '#67fad8', '#14426c', '#e26b8c', '#f03ef9']

// =============== Button Event 처리 ===============
/**
 * Buttons
 *  1) 프로세스 입력창 추가
 *  2) 프로세스 입력창 삭제
 *  3) Random 프로세스 팝업 (OPEN, CLOSE)
 *  4) Random 프로세스 생성
 *  5) 프로세서 입력창 추가
 *  6) 프로세서 입력창 삭제
 *  7) 모든 입력 삭제 (RESET)
 */

let processCount = 1;   // 프로세스 개수
// =============== 프로세스 입력창 추가 ===============
function addProcess() {
    if (processCount > 99) {
        alert("프로세스 개수 초과: 프로세스는 99개까지 입력 가능합니다!");
        return;
    }
    const processTable = document.getElementById("processInputTable");
    const nextRow = document.createElement("tr");
    const nextProcessName = "p" + processCount;
    const nameCell = document.createElement("td");
    const arrivalTimeCell = document.createElement("td");
    const workloadCell = document.createElement("td");
    nameCell.textContent = nextProcessName;
    nameCell.style.backgroundColor = colors[processCount];
    nameCell.style.color = "#fff";
    arrivalTimeCell.innerHTML = `<input type="text" name="arrivalTime" value="0">`;
    workloadCell.innerHTML = `<input type="text" name="workload">`;
    nextRow.appendChild(nameCell);
    nextRow.appendChild(arrivalTimeCell);
    nextRow.appendChild(workloadCell);
    processTable.appendChild(nextRow);
    ++processCount;
}
// =============== 프로세스 입력창 삭제 ===============
function deleteProcess() {
    if (processCount <= 0) return;
    const processTable = document.getElementById("processInputTable");
    processTable.removeChild(processTable.lastChild);
    processCount--;
}
// =============== Random 프로세스 팝업 ===============
function openPopup() {
    document.getElementById("popup").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
//=============== Random 프로세스 생성 ===============
function generateRandomProcess() {
    const processTable = document.getElementById("processInputTable");
    let processNumber = document.getElementById("processNumber").value;
    if(parseInt(processCount) + parseInt(processNumber) > 100) {
        alert("프로세스 개수 초과: 프로세스는 99개까지 입력 가능합니다!");
        return;
    }
    let arrivalTimeRange = document.getElementById("arrivalTimeRange").value;
    let workloadRange = document.getElementById("workLoadRange").value;
    for (var i = 1; i <= processNumber; i++) {
        const nextProcessName = "p" + processCount;
        let arrivalTime = Math.floor(Math.random() * arrivalTimeRange);
        let workload = Math.floor(Math.ceil(Math.random() * workloadRange));
        const nextRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const arrivalTimeCell = document.createElement("td");
        const workloadCell = document.createElement("td");
        nameCell.textContent = nextProcessName;
        nameCell.style.backgroundColor = colors[processCount];
        nameCell.style.color = "#fff";
        arrivalTimeCell.innerHTML = `<input type="text" name="arrivalTime" value="${arrivalTime}">`;
        workloadCell.innerHTML = `<input type="text" name="workload" value="${workload}">`;
        
        nextRow.appendChild(nameCell);
        nextRow.appendChild(arrivalTimeCell);
        nextRow.appendChild(workloadCell);
        processTable.appendChild(nextRow);
        ++processCount;
    }
    document.getElementById("popup").style.display = "none"
}
// 프로세서 개수
let coreCount = 4;  
// =============== 프로세서 입력창 추가 ===============
function addCore() {
    if (coreCount >= 15) {
        alert("프로세서 개수 초과: 프로세서는 15개까지 입력 가능합니다!");
        return;
    }
    const coreTable = document.getElementById("coreInputTable");
    const newRow = document.createElement("tr");
    ++coreCount;
    const newCoreName = "Core" + coreCount;
    const nameCell = document.createElement("td");
    const selectCell = document.createElement("td");
    const powerConsumptionCell = document.createElement("td");
    nameCell.textContent = newCoreName;
    selectCell.innerHTML = `<select name="core-input" id="core-input">
                            <option value="None">OFF</option>
                            <option value="P">P CORE</option>
                            <option value="E">E CORE</option></select>`;
    powerConsumptionCell.textContent = "";
    newRow.appendChild(nameCell);
    newRow.appendChild(selectCell);
    newRow.appendChild(powerConsumptionCell);
    coreTable.appendChild(newRow);
}
// =============== 프로세서 입력창 삭제 ===============
function deleteCore() {
    if (coreCount <= 4) return;
    const coreTable = document.getElementById("coreInputTable");
    coreTable.removeChild(coreTable.lastChild);
    coreCount--;
}
// =============== 화면 Clear ===============
function resetAll() {
    // 프로세스 입력창 삭제
    const processTable = document.getElementById("processInputTable");
    for(let i=1; i<processCount; i++){
        processTable.removeChild(processTable.lastChild);
    }
    // 프로세서 입력창 삭제
    const coreTable = document.getElementById("coreInputTable");
    const coreTalbeRows = document.querySelectorAll("#coreInputTable tr");
    for(let i=0; i<coreCount; i++){
        coreTalbeRows.forEach((row) => {
            const tds = row.querySelectorAll("td");
            tds[2].textContent = "";
        })
        if(i >= 4){
            coreTable.removeChild(coreTable.lastChild);
        }
    }
    // 선택창 초기화
    var selectBoxes = document.getElementsByTagName("select");
    for (let i = 0; i < selectBoxes.length; i++) {
        selectBoxes[i].value = "None";
    }
    document.getElementById("algorithm").value = "FCFS";
    document.getElementById("timeQuantum").value = "2";
    // 전력소모 초기화
    const totalConsumption = document.getElementById("showConsumption");
    while(totalConsumption.hasChildNodes())
        totalConsumption.removeChild(totalConsumption.lastChild);
    // resultTable 초기화
    const resultTable = document.getElementById("resultTable");
    while(resultTable.hasChildNodes()){
        resultTable.removeChild(resultTable.lastChild);
    }
    // totalResult 초기화
    const totalResult = document.getElementById("totalResult");
    while(totalResult.hasChildNodes())
        totalResult.removeChild(totalResult.lastChild);
    // Ready Queue 초기화
    const readyQueue = document.getElementById("readyQueue");
    while(readyQueue.firstChild)
        readyQueue.removeChild(readyQueue.firstChild);
    // 간트차트 코어 영역 초기화
    const ganttChartCore = document.getElementById("ganttChartCore");
    while(ganttChartCore.hasChildNodes()){
        ganttChartCore.removeChild(ganttChartCore.lastChild);
    }
    // 간트차트 프로세스 영역 초기화
    const ganttChartProcess = document.getElementById("ganttChartProcess");
    while(ganttChartProcess.hasChildNodes()){
        ganttChartProcess.removeChild(ganttChartProcess.lastChild);
    }
    // 간트차트 시간 영역 초기화
    const ganttChartTimeTable = document.getElementById("ganttChartTimeTable");
    while(ganttChartTimeTable.hasChildNodes()){
        ganttChartTimeTable.removeChild(ganttChartTimeTable.lastChild);
    }
    // 프로세스, 프로세서 개수 초기값으로 설정
    processCount = 1;
    coreCount = 4;
}

// =============== 데이터 전송 ===============
/**
 * 전송 데이터
 *  1) 프로세스 입력 정보
 *  2) 프로세서 입력 정보
 *  3) 알고리즘 입력 정보
 *  4) Time-Quantum 입력 정보
 *  5) 전송 형식 : json으로 변환 후 API에 전송
 *  6) 결과 처리 : function showData()
 * 데이터 제약사항
 *  1) 프로세스 : 1개 이상 99개 이하
 *                arrivalTime 0 이상의 정수, not null
 *                workload 1 이상의 정수, not null
 *  2) 프로세서 : 1개 이상 15개 이하
 *                Type "P" or "E", 기본값은 OFF -> 전송 데이터에 포함하지 않음
 *  3) 알고리즘 : "FCFS", "RR", "SPN", "SRTN", "HRRN", "MN" 중 1개
 *  4) Tiem Quantum : 1 이상의 정수, not null
 */

let isRunning = false;
function run() {
    // =============== 중복실행 방지 ===============
    console.log(isRunning);
    if(isRunning){
        alert("Error: 현재 실행중! 실행 종료 후 다시 실행해주세요.");
        return;
    }
    // =============== 입력 제외 화면정보 초기화 ===============
    // 코어 입력 창 코어 별 전력소모량 초기화
    const coreTalbeRows = document.querySelectorAll("#coreInputTable tr");
    for(let i=0; i<coreCount; i++){
        coreTalbeRows.forEach((row) => {
            const tds = row.querySelectorAll("td");
            tds[2].textContent = "";
        })
    }
    // 전력소모 초기화
    const totalConsumption = document.getElementById("showConsumption");
    while(totalConsumption.hasChildNodes())
        totalConsumption.removeChild(totalConsumption.lastChild);
    // resultTable 초기화
    const resultTable = document.getElementById("resultTable");
    while(resultTable.hasChildNodes()){
        resultTable.removeChild(resultTable.lastChild);
    }
    // totalResult 초기화
    const totalResult = document.getElementById("totalResult");
    while(totalResult.hasChildNodes())
        totalResult.removeChild(totalResult.lastChild);
    // Ready Qeuee 초기화
    const readyQueue = document.getElementById("readyQueue");
    while (readyQueue.firstChild)
        readyQueue.removeChild(readyQueue.firstChild);
    // 간트차트 코어 영역 초기화
    const ganttChartCore = document.getElementById("ganttChartCore");
    while (ganttChartCore.hasChildNodes()) {
        ganttChartCore.removeChild(ganttChartCore.lastChild);
    }
    // 간트차트 프로세스 영역 초기화
    const ganttChartProcess = document.getElementById("ganttChartProcess");
    while (ganttChartProcess.hasChildNodes()) {
        ganttChartProcess.removeChild(ganttChartProcess.lastChild);
    }
    // 간트차트 시간 영역 초기화
    const ganttChartTimeTable = document.getElementById("ganttChartTimeTable");
    while (ganttChartTimeTable.hasChildNodes()) {
        ganttChartTimeTable.removeChild(ganttChartTimeTable.lastChild);
    } 
    // =============== 입력값 처리 & 데이터 제약사항 검사 ===============
    // =============== 프로세스 정보 ===============
    const processes = [];
    const processTable = document.querySelector("#processInputTable");
    const rows = processTable.querySelectorAll("tr");
    // rows가 0일 경우 프로세스 입력이 없다는 것
    if(rows.length === 0) {
        alert("프로세스 입력 없음: 프로세스는 1개 이상 99개 이하로 입력해야합니다.");
    }
    for (let i = 0; i < rows.length; i++) { // 첫 번째 row는 헤더이므로 생략
        const process = {
            name: rows[i].querySelector("td:first-child").textContent,
            arrivalTime: parseInt(rows[i].querySelector("input[name='arrivalTime']").value),
            workload: parseInt(rows[i].querySelector("input[name='workload']").value)
        };
        // arrivalTime & workLoad 범위 검사
        if(process.arrivalTime < 0 || process.workload < 1){
            alert("입력값 오류: Arrival TIme은 0 이상, WorkLoad는 1 이상의 정수를 입력하세요.");
            return;
        }
        processes.push(process);
    }
    // =============== 프로세서 정보 ===============
    const processors = [];
    const processorRows = document.querySelectorAll("#coreInputTable tr")
    processorRows.forEach((row) => {
        const tds = row.querySelectorAll('td');
        const coreName = tds[0].textContent;
        const coreType = tds[1].querySelector('select').value;
        if (coreType !== 'None') {
          processors.push({
            name: coreName,
            core: coreType,
          });
        }
      });
    //processors.length가 0이면 프로세서 입력이 없다는 것
    if(processors.length === 0){
        alert("프로세서 입력 없음: 프로세서는 1개 이상 15개 이하로 입력해야합니다.");
        return;
    }
    // =============== 알고리즘 & Time-Quantum ===============
    const algorithm = document.querySelector("#algorithm").value;
    const timeQuantum = Number(document.querySelector("#timeQuantum").value);
    if(timeQuantum === 0){
        alert("입력값 오류: Time Quantum은 1 이상의 정수를 입력하세요.");
    }

    // =============== json 데이터 생성 ===============
    const data = {
        processes: processes,
        processors: processors,
        algorithm: algorithm,
        timeQuantum: timeQuantum
    };
    // =============== API로 전송 ===============
    fetch("https://api.process-scheduler.link/schedule", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        // response data showData로 전달
        .then(data=>showData(data, processors))
        .catch(error => {
            // 오류 처리
            console.error('There was a problem with the fetch operation:', error);
        });
}

// =============== 결과 출력 ===============
/**
 * 출력 결과
 *  1) 프로세서 별 전력 소모량
 *  2) 총 전력 소모량
 *  3) Ready-Queue
 *  4) Gantt-Chart
 *  5) 현재 작업중인 프로세서에 할당된 프로세스 색상 표시
 *  6) Result Table
 */

function showData(data, processors){
    isRunning = true;
    let statuses = data.statuses;
    console.log(statuses);
    console.log(statuses[0].pairs[0].processName);
    console.log(statuses[1].pairs[0].processName);
    console.log(statuses[0].pairs[0].processName === statuses[1].pairs[0].processName);

    // =============== 간트차트 생성 ===============
    // 간트차트 왼쪽에 프로세서 영역 생성
    const ganttChartCore = document.getElementById("ganttChartCore");
    for(let i=0; i<processors.length; i++){
        const coreCell = document.createElement("div");
        const coreName = document.createElement("div");
        coreName.innerHTML = processors[i].name;
        coreCell.appendChild(coreName);
        ganttChartCore.appendChild(coreCell);
    }
    // 간트차트 오른쪽에 프로세서 별 프로세스 간트차트 생성
    const ganttChartProcess = document.getElementById("ganttChartProcess");
    // 코어 별 프로세스 간트차트 영역 생성
    const progressBars = [];
    const count = [];
    for(let i=0; i<processors.length; i++){
        progressBars[i] = document.createElement("div");
        count[i] = 1;
    }
    // 전체 결과 순회하며 각각의 간트차트 생성
    for(let i=0; i<statuses.length-1; i++){
        for(let j=0; j<statuses[i].pairs.length; j++){
            const progressBar = document.createElement("div");
            if(statuses[i].pairs[j].processName === statuses[i+1].pairs[j].processName){
                ++count[j];
            }
            else{
                let width = parseInt(60 * count[j]);
                progressBar.style.width = width+"px";
                let processIndex = String(statuses[i].pairs[j].processName).substring(1);
                if(statuses[i].pairs[j].processName === null){
                    progressBar.style.backgroundColor = "#fff";
                }
                progressBar.style.backgroundColor = colors[processIndex];
                const processName = document.createElement("div");
                processName.innerHTML = statuses[i].pairs[j].processName;
                processName.style.width = width+"px";
                progressBar.appendChild(processName);
                progressBar.style.color = "#fff";
                progressBars[j].appendChild(progressBar);
                count[j] = 1;
            }
        }
    }
    for(let i=0; i<progressBars.length; i++){
        ganttChartProcess.appendChild(progressBars[i]);
    }
    let background = document.createElement("div");
    background.className = "bg-gantt-chart-process";
    let backgroundHeight = processors.length*50 + 10;
    let backgroundWidth = statuses[statuses.length-1].to * 60;
    background.style.height = backgroundHeight+"px";
    background.style.width = backgroundWidth+"px";
    ganttChartProcess.appendChild(background);
    // 간트차트 아래쪽 시간초 표시
    const ganttChartTimeTable = document.getElementById("ganttChartTimeTable");
    const initialTimeCell = document.createElement("div");
    const initialTime = document.createElement("div");
    initialTime.innerHTML = statuses[0].from;
    initialTimeCell.appendChild(initialTime);
    ganttChartTimeTable.appendChild(initialTimeCell);
    statuses.forEach((status) => {
        const nextTimeCell = document.createElement("div");
        const nextTime = document.createElement("div");
        nextTime.innerHTML = status.to;
        nextTimeCell.appendChild(nextTime);
        ganttChartTimeTable.appendChild(nextTimeCell);
    })
    // =============== Result Table 공간 보 ===============
    const resultTable = document.getElementById("resultTable");
    for(let i=0; i<processCount-1; i++){
        const newRow = document.createElement("tr");
        const processName = document.createElement("td");
        const arrivalTime = document.createElement("td");
        const burstTime = document.createElement("td");
        const waitingTime = document.createElement("td");
        const turnaroundTime = document.createElement("td");
        const ntt = document.createElement("td");
        processName.textContent = "";
        arrivalTime.textContent = "";
        burstTime.textContent = "";
        waitingTime.textContent = "";
        turnaroundTime.textContent = "";
        ntt.textContent = "";
        newRow.appendChild(processName);
        newRow.appendChild(arrivalTime);
        newRow.appendChild(burstTime);
        newRow.appendChild(waitingTime);
        newRow.appendChild(turnaroundTime);
        newRow.appendChild(ntt);
        resultTable.appendChild(newRow);
    }
    // =============== setInterval 변수 선언 ===============
    let i = 0;
    // 전구 애니메이션 효과
    let opacity = 1;
    const icon = document.getElementById("consumptionIcon");
    // 끝나는 시간
    let endTime = parseInt(statuses[statuses.length-1].to);
    // Result Table
    let resultTableRowIndex = 0;
    let totalBT = 0, totalWT = 0, totalTT = 0, totalNTT = 0, averageNTT = 0;
    // =============== 초마다 결과 출력 ===============
    const timer = setInterval(function () {
        // 전구 애니메이션 효과
        opacity = opacity === 1 ? 0 : 1;
        icon.style.opacity = opacity;

        if (i < statuses.length) {
            // =============== 프로세서별 전력 소모량 ===============
            const processorRows = document.querySelectorAll("#coreInputTable tr");
            statuses[i].processorPowerConsumptions.forEach((processor) => {
                processorRows.forEach((row) => {
                    const tds = row.querySelectorAll("td");
                    if (tds[0].textContent == processor.processorName) {
                        tds[2].textContent = processor.totalPowerConsumption + "W";
                    }
                });
            });
            // =============== 총 전력 소모량 ===============
            const totalConsumption = document.getElementById("showConsumption");
            const consumption = document.createElement("span");
            consumption.textContent = statuses[i].totalPowerConsumption + "W";
            if(totalConsumption.firstChild)
                totalConsumption.removeChild(totalConsumption.firstChild);
            totalConsumption.appendChild(consumption);
            // =============== Ready Queue ===============
            const readyQueue = document.getElementById("readyQueue")
            while(readyQueue.firstChild)
                    readyQueue.removeChild(readyQueue.firstChild);
            statuses[i].readyQueue.forEach((queue) => {
                const readyQueueProcess = document.createElement("div");
                readyQueueProcess.className = "ready-queue-process";
                let processNumber = parseInt(String(queue).substring(1));
                readyQueueProcess.style.backgroundColor = colors[processNumber];
                const readyQueueProcessName = document.createElement("div");
                readyQueueProcessName.className = "ready-queue-process-name";
                readyQueueProcessName.innerHTML = queue;
                readyQueueProcessName.style.color = "#fff";
                readyQueueProcessName.style.width = "40px";
                readyQueueProcess.appendChild(readyQueueProcessName);
                readyQueue.appendChild(readyQueueProcess);
            })
            // =============== Gantt Chart 애니메이션 효과 ===============
            //background.style.animation = "progress "+(endTime/2)+"s linear 1 both";
            // =============== 프로세서 별 현재 작업중인 프로세스 표시 ===============
            const coreInputTableRows = document.querySelectorAll("#coreInputTable tr");
            statuses[i].pairs.forEach((pair) => {
                if(pair.processName != null){
                    let coreIndex = parseInt(String(pair.processorName).substring(4));
                    let processIndex = parseInt(String(pair.processName).substring(1));
                    coreInputTableRows[coreIndex-1].querySelector("td").style.backgroundColor = colors[processIndex];
                    coreInputTableRows[coreIndex-1].querySelector("td").style.color = "#fff";
                }
                else{
                    let coreIndex = parseInt(String(pair.processorName).substring(4));
                    coreInputTableRows[coreIndex-1].querySelector("td").style.backgroundColor = "#fff";
                    coreInputTableRows[coreIndex-1].querySelector("td").style.color = "#000";
                }
            })
            // =============== Result Table ===============
            const resultTableRows = document.querySelectorAll("#resultTable tr");
            statuses[i].terminatedProcesses.forEach((terminated) => {
                if(terminated.length != 0){
                    const tds = resultTableRows[resultTableRowIndex].querySelectorAll("td");
                    tds[0].textContent = terminated.name;
                    tds[1].textContent = terminated.arrivalTime;
                    tds[2].textContent = terminated.burstTime;
                    tds[3].textContent = terminated.waitingTime;
                    tds[4].textContent = terminated.turnaroundTime;
                    tds[5].textContent = terminated.normalizedTurnaroundTime;
                    ++resultTableRowIndex;
                    // 누적합 계산
                    totalBT += Number(terminated.burstTime);
                    totalWT += Number(terminated.waitingTime);
                    totalTT += Number(terminated.turnaroundTime);
                    totalNTT += Number(terminated.normalizedTurnaroundTime);
                }
            })
            ++i;
            // =============== Total Result ===============
            if(i == statuses.length){
                const totalResult = document.getElementById("totalResult");
                const newRow = document.createElement("tr");
                const title = document.createElement("td");
                const emptyCell = document.createElement("td");
                const totalBTCell = document.createElement("td");
                const totalWTCell = document.createElement("td");
                const totalTTCell = document.createElement("td");
                const averageNTTCell = document.createElement("td");
                title.textContent = "TOTAL";
                emptyCell.textContent = "";
                totalBTCell.textContent = totalBT;
                totalWTCell.textContent = totalWT;
                totalTTCell.textContent = totalTT;
                averageNTT = (totalNTT / (processCount-1)).toFixed(2);
                averageNTTCell.textContent = averageNTT;
                newRow.appendChild(title);
                newRow.appendChild(emptyCell);
                newRow.appendChild(totalBTCell);
                newRow.appendChild(totalWTCell);
                newRow.appendChild(totalTTCell);
                newRow.appendChild(averageNTTCell);
                totalResult.appendChild(newRow);
            }
        } else {
            icon.style.opacity = 1;
            isRunning = false;
            clearInterval(timer); // 타이머 정지
        }
    }, 350);
    timer = setInterval(function() {
        background.style.animation = "progress "+((endTime-1)/2.6)+"s linear 1 both";
    }, 500);
}