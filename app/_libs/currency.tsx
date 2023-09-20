export class Currency {

    static toIDR(value: number) : string {
        return value.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          });
    }

}