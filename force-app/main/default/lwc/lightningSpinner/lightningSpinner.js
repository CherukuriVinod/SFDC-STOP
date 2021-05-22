import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
export default class lightningSpinner extends LightningElement {
    @track accounts;
    @track error;
    @track isLoading = false;
    handleLoad() {
        this.isLoading = true;
        getAccountList()
            .then(result = &gt; {
                this.accounts = result;
                this.isLoading = false;
            })
            catch(error =&gt; {
                this.error = error;
                this.isLoading = false;
            });
    }
}
