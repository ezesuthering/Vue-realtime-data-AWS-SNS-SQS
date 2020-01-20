<template>
<div>
    <v-snackbar
      v-model="activeNotificationStatus"
    >
      {{ 'NEW NOTIFICATION. There are: ' + this.$store.getters.getNotifications.length + ' new notification/s.' }}
    </v-snackbar>
</div>
</template>

<script>
export default {
    name: 'notification',
    computed: {
        activeNotificationStatus: {
            get() {
                return this.$store.getters.getNotificationActiveStatus
            },
            set() {

            }
        },
        activeNotificationMessage: {
            get() {
                return this.$store.getters.getNotificationMessage
            },
            set() {

            }
        }
    }
}
</script>