import axios from 'axios';
import { CreateFilmeInformationProtocol } from './interface/create-filme-information-protocol';
import randomNumber from './utils/rendom-number';

const apiKey = process.env.REACT_APP_APIKEY;

export class CreateFilmeInformation implements CreateFilmeInformationProtocol {
  public imageUrl = '';
  public originalTitle = '';
  public overview = '';

  async search(): Promise<void> {
    const _ramdomNumber = randomNumber();
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${_ramdomNumber}?api_key=${apiKey}`,
      )
      .then(async (response) => {
        this.overview = response.data.overview;
        this.originalTitle = response.data.original_title;
        this.constructImageUrl(response.data.poster_path);
      });
  }
  constructImageUrl(localImage: string): void {
    const url = `https://image.tmdb.org/t/p/w500/${localImage}`;
    this.imageUrl = url;
  }
}
