const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Vue To Do List',

            tasks: [
                {
                    name: 'Andare in palestra',
                    done: false,
                },
                {
                    name: 'Fare la spesa',
                    done: true,
                },
                {
                    name: 'Portare fuori il cane',
                    done: true,
                },
                {
                    name: 'Studiare',
                    done: false,
                },
                {
                    name: 'Fare regalo a mamma',
                    done: false,
                },
            ],

            newTask: {
                name: '',
                done: false,
            }
        }
    },

    methods: {
        saveTask() {
            const newTaskcopy = { ...this.newTask };
            if (newTaskcopy.name.length > 3) {
                this.tasks.push(newTaskcopy);
            }
            this.newTask.name = '';
        },

        deleteTask(i) {
            this.tasks.splice(i, 1);
        },

        doneTask(task) {
            task.done = !task.done; 
        }
    }
})
.mount('#app');