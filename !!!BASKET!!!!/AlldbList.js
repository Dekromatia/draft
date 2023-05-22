
import React from 'react'

function AlldbList(props) {
  return (
    <div>
        {props.items && props.items.map(item => {
    return (
        <div key = {item.image_id}>
          <h2>{item.image_id}</h2>
          <h2>{item.stamp_id}</h2>

          <p>Идентификатор клейма: {item.model_id}</p>

          <p>Мксто размещения: {item.stamp_position}</p>
          <p>Сохранность: {item.stamp_preservation}</p>

          <p>Производственный центр: {item.manufact_center}</p>
          <p>Магистрант: {item.magist_name}</p>
          <p>Фабрикант: {item.fabric_name}</p>

          <p>Рельеф: {item.relief_type}</p>
          <p>Cодержание: {item.content_type}</p>
          <p>Форме:{item.shape_type}</p>
          <p>Происхождению: {item.origin_type}</p>

          <h2>Размер клейма</h2>
          <p>по большой оси: {item.axis_large}</p>
          <p>по малой оси: {item.axis_small}</p>

          <p>Эмблема: {item.emblem}</p>
          <p>Датировка: {item.date_text}</p>
          <p>Группа по Финкельштейну:{item.finkelstein}</p>
          <p>Группа по Гарлану:{item.garlan}</p>

          <p>Легенда: {item.stamp_legend}</p>




          <p>Памятник: {item.site_name}</p>
          {/* <p>{item.site_latitude}</p>
          <p>{item.site_longitude}</p> */}

          {/* <p>{item.manufact_latitude}</p>
          <p>{item.manufact_longitude}</p> */}

          <p>Артефакт: {item.artif_g}</p>
          <p>Год раскопок: {item.year_exc}</p>
          <p>Организация: {item.unit_exc}</p>
          <p>Руководитель раскопок: {item.leader_exc}</p>
          <p>Место находки: {item.artif_position}</p>
          <p>Полевой шифр: {item.field_id}</p>
          <p>Место хранения: {item.artif_depository}</p>
          <p>Инвентарный номер:{item.depository_id}</p>
          <p>Описание: {item.description}</p>
          <p>Сохранность артефакта:{item.artif_preservation}</p>
          <p>Цвет тон: {item.munsell_hue}</p>
          <p>Цвет значение: {item.munsell_value}</p>
          <p>Цвет хрома: {item.munsell_chroma}</p>
          <p>Цветовой код по Манселлу{item.munsell_code}</p>
          <p>Название по Манселлу: {item.munsell_name}</p>

        </div>
      )
    })}
    </div>
  )
}

export default AlldbList