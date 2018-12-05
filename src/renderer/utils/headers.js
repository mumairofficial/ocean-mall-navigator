const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwczpcL1wvbGljZW5zZS5nZW5pc2xhYi5jb20iLCJhdWQiOiJodHRwczpcL1wvc3JtYy5nZW5pc2xhYi5jb20iLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTU0Mzc2NzI2OSwibmJmIjoxNTQzNzY3MjY5LCJleHAiOjE1NzQ4NzEyNjksInVpZCI6IjE6MToxIn0.GN2tksmSyCH8quVDyGdUTECFacutz8vKXtbSNNCV2LKUp8zn_CEO6Z_D481PevsLSKKl38GzxvDf_56ST7_3KGzI9jjsrvBnArTbHRN8fGGpSwSRk6BhXOq6Xz2YHl_wQvMJO-pMKjeFOXBuH_nVlAUPsAN7VCqzba9bl5hggTS8GTaLcLr1TSzGAp9a0E4iJn0I3WRZvQ1TKSUwnNet0giTlhSxQe1gYFn5O5gALIUm-FT8sz4R3nwOt1xrtKLALpHTs22pNaJ3imjmMl5E6fT9MaEx8YEf2j2xwCl6RA-IY5DqpPu2SNfDEsdU9tGeJl1Z1j29IPFc00XSTNX7wg';

export default class Headers {
  static simple() {
    return {
      'content-type': 'application/json'
    };
  }

  static withToken() {
    return Object.assign({}, this.simple(), {
      Authorization: `Bearer ${accessToken}`
    });
  }
}
