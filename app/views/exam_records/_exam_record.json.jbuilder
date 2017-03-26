json.extract! exam_record, :id, :user_id, :exam_items, :created_at, :updated_at
json.url exam_record_url(exam_record, format: :json)
