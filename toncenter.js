class toncenter{
    constructor(){
        this.api = "https://toncenter.com/api/v3"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data = JSON.stringify(data);
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async master_chain_Info(){
        return (await this.req(`${this.api}/masterchainInfo`));
    }
    async run_get_method(address,method,value){
        return (await this.req(`${this.api}/runGetMethod`,{"address": address,"method": method,"stack": [{"type": "cell","value": [value]}]}));
    }
    async message(boc){
        return (await this.req(`${this.api}/message`,{"boc":boc}));
    }
    async estimate_fee(address,body,code,data){
        return (await this.req(`${this.api}/estimateFee`,{"address": address,"body": body,"init_code": code,"init_data": data,"ignore_chksig": True}));
    }
    async wallet(address){
        return (await this.req(`${this.api}/wallet?address=${address}`));
    }
    async account(address){
        return (await this.req(`${this.api}/account?address=${address}`));
    }
    async notcoin_holders(limit){
        return (await this.req(`${this.api}/notcoin_holders?limit=${limit}`));
    }
    async jeton_masters(address,admin,limit,offset){
        return (await this.req(`${this.api}/jetton/masters?address=${address}&admin_address=${admin}&limit=${limit}&offset=${offset}`));
    }
    async nft_collections(collection,owner,limit,offset){
        return (await this.req(`${this.api}/nft/collections?collection_address=${collection}&owner_address=${owner}&limit=${limit}&offset=${offset}`));
    }
    async masterchain_block_shards(seqno,include){
        return (await this.req(`${this.api}/masterchainBlockShards?seqno=${seqno}&include_mc_block=${include}`));
    }
    async address_book(address){
        return (await this.req(`${this.api}/addressBook?address=${address}`));
    }
    async masterchain_block_shard_state(seqno){
        return (await this.req(`${this.api}/masterchainBlockShardState?seqno=${seqno}`));
    }
    async transactions_by_message(direction,hash,limit,offset){
        return (await this.req(`${this.api}/transactionsByMessage?direction=${direction}&msg_hash=${hash}&limit=${limit}&offset=${offset}`));
    }
    async blocks(workchain,shard,seqno,start_utime,end_utime,start_lt,end_lt,limit,offset,sort){
        return (await this.req(`${this.api}/blocks?workchain=${workchain}&shard=${shard}&seqno=${seqno}&start_utime=${start_utime}&end_utime=${end_utime}&start_lt=${start_lt}&end_lt=${end_lt}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
    async transactions(workchain,shard,seqno,account,exclude,hash,It,start_utime,end_utime,start_It,end_lt,limit,offset,sort){
        return (await this.req(`${this.api}/transactions?workchain=${workchain}&shard=${shard}&seqno=${seqno}&account=${account}&exclude_account=${exclude}&hash=${hash}&lt=${It}&start_utime=${start_utime}&end_utime=${end_utime}&start_lt=${start_It}&end_lt=${end_lt}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
    async transactions_by_masterchain_block(seqno,limit,offset,sort){
        return (await this.req(`${this.api}/transactionsByMasterchainBlock?seqno=${seqno}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
    async adjacent_transactions(hash,direction,limit,offset,sort){
        return (await this.req(`${this.api}/adjacentTransactions?hash=${hash}&direction=${direction}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
    async messages(hash,source,destination,body_hash,limit,offset){
        return (await this.req(`${this.api}/messages?hash=${hash}&source=${source}&destination=${destination}&body_hash=${body_hash}&limit=${limit}&offset=${offset}`));
    }
    async nft_items(adderss,owner,collection,index,limit,offset){
        return (await this.req(`${this.api}/nft/items?address=${address}&owner_address=${owner}&collection_address=${collection}&index=${index}&limit=${limit}&offset=${offset}`));
    }
    async jetton_wallets(address,owner,jetton,limit,offset){
        return (await this.req(`${this.api}/jetton/wallets?address=${address}&owner_address=${owner}&jetton_address=${jetton}&limit=${limit}&offset=${offset}`));
    }
    async jetton_transfers(address,wallet,master,direction,start_utime,end_utime,start_lt,end_lt,limit,offset,sort){
        return (await this.req(`${this.api}/jetton/transfers?address=${address}&jetton_wallet=${wallet}&jetton_master=${master}&direction=${direction}&start_utime=${start_utime}&end_utime=${end_utime}&start_lt=${start_lt}&end_lt=${end_lt}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
    async jetton_burns(address,wallet,master,start_utime,end_utime,start_lt,end_lt,limit,offset,sort){
        return (await this.req(`${this.api}/jetton/burns?address=${address}&jetton_wallet=${wallet}&jetton_master=${master}&start_utime=${start_utime}&end_utime=${end_utime}&start_lt=${start_lt}&end_lt=${end_lt}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
    async nft_transfers(adderss,item,collection,direction,start_utime,end_utime,start_lt,end_lt,limit,offset,sort){
        return (await this.req(`${this.api}/nft/transfers?address=${address}&item_address=${item}&collection_address=${collection}&direction=${direction}&start_utime=${start_utime}&end_utime=${end_utime}&start_lt=${start_lt}&end_lt=${end_lt}&limit=${limit}&offset=${offset}&sort=${sort}`));
    }
}
module.exports = {toncenter};