class s3_handler():

    def __init__(self, access_key_id, secret_access_key, region_name, bucket_name):
        self.ACCESS_KEY_ID = access_key_id
        self.AWS_S3_SECRET_ACCESS_KEY = secret_access_key
        self.AWS_S3_REGION_NAME = region_name
        self.AWS_S3_STORAGE_BUCKET_BACKEND_STATIC = bucket_name
        import boto3
        self.S3 = boto3.client(
            's3',
            aws_access_key_id = self.AWS_S3_ACCESS_KEY_ID,
            aws_secret_access_key = self.AWS_S3_SECRET_ACCESS_KEY,
            region_name = self.AWS_S3_REGION_NAME
        )

    def load_s3(self, file_name):
        response = self.s3.Object(self.AWS_S3_STORAGE_BUCKET_BACKEND_STATIC, file_name)
        return response['Body'].read().decode('utf-8')

    def save_to_s3(self, local_file_path, file_name):
        try:
            self.S3.upload_file(Filename=local_file_path, Bucket= self.AWS_S3_STORAGE_BUCKET_BACKEND_STATIC, Key= file_name)
        except:
            logging.error('Boto3 upload Error')