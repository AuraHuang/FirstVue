<template>

    
    <div class="calendar_content">
        <h1 class="title">Calendar</h1>
        <div class="calendar_section">
            <section class="current_month">
                <p class="changeBtn" @click="prev()"><span>＜</span></p>
                <p>{{ currentYear }} {{ currentMonthName }}</p>
                <p class="changeBtn" @click="next()"><span>＞</span></p>
            </section>
            <section class="weekday_section">
                <div class="weekday" v-for="weekday in allWeekday" :key="weekday">{{ weekday }}</div>
            </section>
            <section class="day_section">
                <div class="day" v-for="day in startDay()" :key="day"></div>
                <div class="day" v-for="day in currentMonthday()" :key="day" :class="currentDate(day)">{{ day }}</div>
            </section>
        </div>
    </div>

</template>

<script>

    export default{
        data() {
            return {
                currentYear: new Date().getFullYear(),
                currentMonth: new Date().getMonth(),
                allWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat']
            }
        },
        methods: {
            currentMonthday() {
                return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
            },
            startDay() {
                return new Date(this.currentYear, this.currentMonth, 0).getDay() + 1
            },
            prev() {
                if (this.currentMonth == 0){
                    this.currentMonth = 11;
                    this.currentYear--;
                }else{
                    this.currentMonth--
                }
            },
            next() {
                if (this.currentMonth == 11){
                    this.currentMonth = 0;
                    this.currentYear++;
                }else{
                    this.currentMonth++;
                }
            },
            currentDate(day) {
                const checkDate = new Date(this.currentYear, this.currentMonth, day).toDateString()
                const today = new Date().toDateString()
                return checkDate == today ? 'today' : ''
            }
        },
        computed: {
            currentMonthName() {
                return new Date(this.currentYear, this.currentMonth).toLocaleString('en-US',{month: 'long'})
            }
        }
    }

</script>

<style>
    .calendar_content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 30%;
        text-align: center;
    }
    .title {
        padding: 20px;
    }
    .calendar_section {
        border: 2px solid rgb(34, 34, 34);
        border-radius: 5px;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    }
    .current_month {
        padding: 10px;
        border-bottom: 2px solid rgb(34, 34, 34);
        font-size: 20px;
        font-weight: bold;
        display: flex;                  /* establish flex container */
        flex-direction: row;            /* default value; can be omitted */
        flex-wrap: nowrap;              /* default value; can be omitted */
        justify-content: space-between;
        align-items: center; 
    }
    .changeBtn {
        cursor: pointer;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex; /* or inline-flex */
        align-items: center; 
        justify-content: center;
    }
    .changeBtn:hover {
        background-color: rgb(34, 34, 34);
        transition-duration: 0.3s;
    }
    .changeBtn:hover span {
        color: white;
        transition-duration: 0.3s;
    }
    .weekday_section {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-flow: dense;
    }
    .weekday {
        padding: 5px;
    }
    .day_section {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-flow: dense;
    }
    .day {
        padding: 15px 5px;
    }
    .today {
        color: white;
        background-color: rgb(34, 34, 34);
        border-radius: 50%;
    }
</style>
