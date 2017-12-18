#!/bin/bash

region_name='ap-south-1'
ami_id='ami-34abe55b'

my_array=( $(aws ec2 describe-images --image-ids ami-34abe55b --region ap-south-1  --output text --query "Images[*].BlockDeviceMappings[*].Ebs.SnapshotId") )

my_array_length=${#my_array[@]}

echo "Deregistering AMI: "$ami_id
aws ec2 deregister-image --image-id $ami_id --region $region_name

for (( i=0; i<$my_array_length; i++ ))
do
temp_snapshot_id=${my_array[$i]}
echo "Deleting Snapshot: " $temp_snapshot_id
aws ec2 delete-snapshot --snapshot-id $temp_snapshot_id --region $region_name
done

