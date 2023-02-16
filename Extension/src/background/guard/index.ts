/**
 * @file
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */
import browser from 'webextension-polyfill';
import * as T from './types';

export class Guard {
    private whiteList: T.Domain[] = [];

    public async init(): Promise<void> {
        // eslint-disable-next-line no-console
        console.log(browser);
        // get white domain list
        this.whiteList = await this.getWhiteList('https://wwww');
    }

    /**
     * @param {string} url - fetch url
     * @returns {T.Domain} - white list
     */
    private getWhiteList = async (url: string): Promise<T.Domain[]> => {
        const response = await fetch(url, {});
        return response.json();
    };
}
