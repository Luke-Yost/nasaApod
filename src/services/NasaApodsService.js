import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class NasaApodsService{
  async getNasaApodByDate(){
    const res = await api.get()
    logger.log('-ApodByDate', res.data);
    AppState.displayedApod = res.data
  }
}

export const nasaApodsService = new NasaApodsService()