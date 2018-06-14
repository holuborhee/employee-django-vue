<template>
<div>
	<img :src="user.picture" />
	<div>{{fullName}}
		<p>{{user.phone}}</p>
	</div>
</div>
</template>



<script>
const EmployeeCard = {
	props: ['user'],
	computed: {
		fullName: function(){
			return this.user.firstName + ' ' + this.user.lastName;
		}
	},
	methods: {
    clickme: function(){
    	alert(`You clcicked ${this.fullName}`)
    }
	}	
}

export default EmployeeCard;
</script>

<style type="text/css" scoped="scoped">
	
</style>