<script>
  import { onMount } from "svelte";

     const api_time_zones = "http://worldtimeapi.org/api/timezone";
     const api_time_by_ip = "http://worldtimeapi.org/api/ip";
     let time_zones = {}
     let tz_selected = "";
     let current_time = {};

     onMount(async function () {
      const tz_response = await fetch(api_time_zones);
      time_zones = await tz_response.json();
      const current_time_response = await fetch(api_time_by_ip);
      current_time  = await current_time_response.json();
     })

     function handleSubmit() {
       console.log("Submit")
     }

     async function handle_tz_selected(tz_selected) {
         if (!tz_selected) { return }
         console.log(`Time zone selected: ${time_zones[tz_selected]}`); 
         const current_time_response = await fetch(api_time_zones + "/" + time_zones[tz_selected]);
         current_time = await current_time_response.json();
     }

     $: {
         handle_tz_selected(tz_selected)
     }
     
</script>

Enter your time zone
<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={tz_selected} >
		{#each time_zones as item, i}
			<option value={i}>
				{time_zones[i]}
			</option>
		{/each}
	</select>
</form>

{current_time.utc_datetime}


