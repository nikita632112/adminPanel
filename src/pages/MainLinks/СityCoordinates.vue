<template>
  <h5>Информация о разделе "Города"</h5>
  <table-list
    :columns = "columns"
    :rows = "rows"
  ></table-list>
</template>

<script>
import { api } from 'boot/axios'
import TableList from 'components/TableList'
export default {
  name: 'CityCoordinates',
  components: { TableList },
  data () {
    return {
      rows: [],
      columns: [
        {
          name: 'id',
          align: 'center',
          label: 'id',
          field: 'id',
          sortable: true
        },
        {
          name: 'title',
          align: 'center',
          label: 'Название',
          field: 'title',
          sortable: true
        },
        {
          name: 'gps_lat',
          align: 'center',
          label: 'Ширина',
          field: 'gps_lat',
          sortable: true
        },
        {
          name: 'gps_lon',
          align: 'center',
          label: 'Долгота',
          field: 'gps_lon',
          sortable: true
        },
        {
          name: 'actions',
          align: 'right'
        }
      ]
    }
  },
  mounted () {
    api.get('select/cities').then((response) => {
      this.rows = response.data.result.list
    })
  }
}
</script>
