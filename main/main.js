// avvio vue

const root = new Vue (
    
    {    el:'#app',
        data:{
            contacts:[
                {
                    name:'Michele',
                    avatar:'_1',
                    visible: true,
                    messages: [
                        {
                            date:'10/01/2020 15:30:55',
                            text: 'Hai portato fuori il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                           date: '28/03/2020 10:10:40',
                           text: 'La Marianna va in campagna',
                           status: 'received'
                        },
                        {
                           date: '28/03/2020 10:20:10',
                           text: 'Sicuro di non aver sbagliato chat?',
                           status: 'sent'
                        },
                        {
                           date: '28/03/2020 16:15:22',
                           text: 'Ah scusa!',
                           status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

            ],
            active:0,
            newMes: '',
            cerca:"",

        },
        methods: {
            // rendo attivo il contatto al click 
            setActiveContact(index) {
                this.active = index;
            },
            //inserisco nella chat un nuovo messaggio scritto dall utente
            newMessage() {
                const sendMessage = {
                    date: dayjs().format("DD/MM/YYYY HH:mm"),
                    text: this.newMes,
                    status: 'sent'
                };
                this.contacts[this.active].messages.push(sendMessage);
                this.newMes = "";

                // imposto una risposta automatica dopo 1,5 sec

                const newMessageReplay = {
                    date: dayjs().format("DD/MM/YYYY HH:mm"),
                    text: 'ok',
                    status: 'received'
                };

                setTimeout(() => {
                    this.contacts[this.active].messages.push(newMessageReplay);
                },1500);
            }
        },
        computed: {
            filtraNomi(){
             // funzione per comparare i nomi
             function compare(a, b) {
               if (a.name < b.name) return -1;
               if (a.name > b.name) return 1;
               return 0;
            }
              
            return this.contacts.filter(user => {
            return user.name.toLowerCase().includes(this.cerca.toLowerCase())
            }).sort(compare)
            }
    }   }
    
);










