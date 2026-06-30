// =======================================
// Budget Planner Script
// =======================================

// ===== DOM =====

const ageGroup = document.getElementById("ageGroup");
const gender = document.getElementById("gender");
const job = document.getElementById("job");
const budget = document.getElementById("budget");

const dynamicFields = document.getElementById("dynamicFields");
const hobbyContainer = document.getElementById("hobbyContainer");

const generateBtn = document.getElementById("generateBtn");

const resultSection = document.getElementById("resultSection");

let chart = null;

// =======================================
// Hiển thị dữ liệu động
// =======================================

job.addEventListener("change", loadDynamicFields);
gender.addEventListener("change", loadHobbies);

function loadDynamicFields(){

    dynamicFields.innerHTML="";

    // Sinh viên

    if(job.value==="university"){

        dynamicFields.innerHTML=`

        <div class="form-group">

            <label>Hình thức sinh sống</label>

            <select id="living">

                <option value="home">Ở cùng gia đình</option>

                <option value="dorm">Ký túc xá</option>

                <option value="rent">Thuê trọ</option>

            </select>

        </div>

        `;

    }

    // Người đi làm

    if(job.value==="worker"){

        dynamicFields.innerHTML+=`

        <div class="form-group">

            <label>Mức thu nhập</label>

            <select id="income">

                <option value="low">Dưới 5 triệu</option>

                <option value="medium">5 - 10 triệu</option>

                <option value="high">10 - 20 triệu</option>

                <option value="veryHigh">20 - 35 triệu</option>

                <option value="rich">Trên 35 triệu</option>

            </select>

        </div>

        <div class="form-group">

            <label>Tình trạng</label>

            <select id="family">

                <option value="single">Độc thân</option>

                <option value="married">Đã kết hôn</option>

                <option value="children">Có con</option>

            </select>

        </div>

        `;

    }

}

// =======================================
// Hiện sở thích
// =======================================

function loadHobbies(){

    hobbyContainer.innerHTML="";

    if(!gender.value) return;

    const hobbies = budgetData.hobbies[gender.value];

    hobbies.forEach(hobby=>{

        hobbyContainer.innerHTML+=`

        <label class="hobby-item">

            <input

                type="checkbox"

                value="${hobby.id}"

            >

            ${hobby.name}

        </label>

        `;

    });

}

// =======================================
// Tạo kế hoạch
// =======================================

generateBtn.addEventListener("click",generateBudget);

function generateBudget(){

    if(!gender.value){

        alert("Vui lòng chọn giới tính.");

        return;

    }

    if(!job.value){

        alert("Vui lòng chọn nghề nghiệp.");

        return;

    }

    if(Number(budget.value)<=0){

        alert("Vui lòng nhập ngân sách.");

        return;

    }

    let data;

    // Học sinh

    if(job.value==="student"){

        data=budgetData.student[gender.value];

    }

    // Sinh viên

    else if(job.value==="university"){

        alert("Đang cập nhật dữ liệu sinh viên.");

        return;

    }

    // Người đi làm

    else if(job.value==="worker"){

        alert("Đang cập nhật dữ liệu người đi làm.");

        return;

    }

    else{

        alert("Chưa có dữ liệu.");

        return;

    }

    renderResult(data);

}

// =======================================
// Hiển thị kết quả
// =======================================

function renderResult(data){

    let html="";

    html+=`

    <div class="card">

        <h2>${data.title}</h2>

        <p>${data.note}</p>

    </div>

    `;

    data.categories.forEach(category=>{

        const money=Math.round(

            budget.value*category.percent/100

        );

        html+=`

        <div class="category-card">

            <div class="category-title">

                <h3>

                    ${category.name}

                </h3>

                <div class="money">

                    ${money.toLocaleString("vi-VN")} VNĐ

                </div>

            </div>

            <div class="progress">

                <div

                    class="progress-bar"

                    style="width:${category.percent}%"

                ></div>

            </div>

            <p>

                ${category.percent}%

            </p>

            <ul class="item-list">

        `;

        category.items.forEach(item=>{

            html+=`

            <li>${item}</li>

            `;

        });

        html+=`

            </ul>

        </div>

        `;

    });

    resultSection.innerHTML=html;

    createChart(data);

}

// =======================================
// Chart
// =======================================

function createChart(data){

    const ctx=document
        .getElementById("budgetChart");

    if(chart){

        chart.destroy();

    }

    chart=new Chart(ctx,{

        type:"pie",

        data:{

            labels:data.categories.map(c=>c.name),

            datasets:[{

                data:data.categories.map(c=>c.percent),

                backgroundColor:budgetData.chartColors

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    position:"bottom"

                }

            }

        }

    });

}
