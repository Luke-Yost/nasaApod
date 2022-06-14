<template>
  <div class="NasaApodPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
        
          <div class="card" style="width: 80vh;">
            <img src={{displayedApod.url}} class="card-img-top" alt="space pic">
          <div class="card-body">
            <h6>{{displayedApod.title}}- {{displayedApod.copyright}} {{displayedApod.date}}</h6>
          <p class="card-text">{{displayedApod.explanation}}</p>
          </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { nasaApodsService } from "../services/NasaApodsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  name: "Home",
  setup(){
    onMounted(async ()=>{
      try {
      await nasaApodsService.getNasaApodByDate()
    } catch (error) {
      logger.error(error)
      Pop.toast(error.message, 'error')
    }
    })
    return {
      displayedApod: computed (() => AppState.displayedApod)
    }

  }
}
</script>


<style lang="scss" scoped>

</style>